import * as THREE from "three";
// https://stackoverflow.com/a/56338877/10013136
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { ZarrArray, openArray, HTTPStore, NestedArray, TypedArray } from "zarr";
import { UserAttributes } from "zarr/types/types";
import GUI from "lil-gui";
import { LayerManager } from "./layer";
import { convertIntTypedArrayToCategoryColors } from "./colors";
import {
  BloomEffect,
  EffectComposer,
  EffectPass,
  RenderPass,
} from "postprocessing";

const vertexShader = `
uniform float size;
attribute vec3 color;
varying vec3 vColor;

void main() {
    vColor = color;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (200.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
}
`;

const fragmentShader = `
varying vec3 vColor;

void main() {
    // A circle mask
    if (length(gl_PointCoord - vec2(0.5, 0.5)) > 0.5) {
        discard;
    }

    gl_FragColor = vec4(vColor, 1.0);
}
`;

export class ThreeDimScatterPlot {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private controls: OrbitControls;
  private shaderMaterial: THREE.ShaderMaterial;
  private particleSystem: THREE.Points | null;
  private layerManager: LayerManager;
  private gui: GUI;
  private layersGuiFolder: GUI;
  private geometry: THREE.BufferGeometry | null = null;
  private composer: EffectComposer;
  debug = false;

  constructor(element: HTMLDivElement) {
    this.particleSystem = null;
    this.layerManager = new LayerManager();
    this.shaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        size: { value: 0.2 },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true,
    });

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      5000
    );
    // Move the camera back
    this.camera.position.z = 20;

    this.controls = new OrbitControls(this.camera, element);
    this.controls.autoRotate = true;

    this.renderer = new THREE.WebGLRenderer({
      powerPreference: "high-performance",
      antialias: false,
      stencil: false,
      depth: false,
    });
    this.renderer.setSize(element.clientWidth, element.clientHeight);
    element.appendChild(this.renderer.domElement);

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.composer.addPass(
      new EffectPass(
        this.camera,
        new BloomEffect({
          luminanceThreshold: 0,
          mipmapBlur: true,
        })
      )
    );

    this.gui = new GUI();
    this.layersGuiFolder = this.gui.addFolder("Layers");

    // Add some controls
    // Point size
    this.gui
      .add(this.shaderMaterial.uniforms.size, "value")
      .min(0.01)
      .max(1)
      .step(0.01)
      .name("Point size");

    // Auto rotating toggle
    this.gui.add(this.controls, "autoRotate").name("Auto rotate");

    // TODO: WebGL compatibility check
    // https://threejs.org/docs/index.html#manual/en/introduction/WebGL-compatibility-check

    this.animate();
  }

  private async animate() {
    // Use bind to ensure `this` inside animate() always refers to the ThreeDimScatterPlot instance,
    // even when the method is passed as a callback to requestAnimationFrame.
    requestAnimationFrame(this.animate.bind(this));
    this.composer.render();

    this.controls.update();

    this.renderer.render(this.scene, this.camera);
  }

  private async refreshGui() {
    // Clear layers folder
    this.layersGuiFolder.destroy();
    this.layersGuiFolder = this.gui.addFolder("Layers");

    // Positions dropdown
    // TODO: onChange
    const positionItems = this.layerManager.getLayerLabelIdLookup("positions");
    this.layersGuiFolder.add(
      this.layerManager.soloedLayers,
      "positions",
      positionItems
    );

    // Colors dropdown
    const colorItems = this.layerManager.getLayerLabelIdLookup("colors");
    this.layersGuiFolder
      .add(this.layerManager.soloedLayers, "colors", colorItems)
      .onChange((layerId: number) => {
        this.layerManager.soloLayer(layerId);
        // The selectedAttribute dropdown
        // would need to update, based on the
        // color layer selected. So refresh the GUI
        this.refreshGui();
      });

    // If colors is set to "None", don't show the selectedAttribute dropdown
    if (this.layerManager.soloedLayers.colors === -1) {
      return;
    }

    const currentLayerInstance =
      this.layerManager.getSoloedLayerInstance("colors");

    const currentColorAttributes = await currentLayerInstance.getAttributes();

    if (!currentColorAttributes) {
      return;
    }

    // Attributes of current color dropdown
    this.layersGuiFolder
      .add(currentLayerInstance, "selectedAttribute", currentColorAttributes)
      .onChange((attribute: string) => {
        currentLayerInstance.selectAttribute(attribute);
      });
    // As of now since lil-gui doesn't have
    // multi-select dropdowns, we can't have
    // multiple attributes selected at once.
  }

  async loadZarr(
    store: string,
    path: string,
    name: string,
    displayType: "positions" | "colors",
    label: string
  ) {
    this.log("Loading new zarr: " + path);
    const zarrToLoad = await openArray({
      store: new HTTPStore(store),
      path: path,
      mode: "r",
    });

    const layerId = this.layerManager.addLayer(name, displayType, label);
    const layer = this.layerManager.getLayer(layerId);
    layer.zarrArray = zarrToLoad;

    if (displayType === "positions") {
      await this.drawPoints(layerId);
      this.layerManager.soloLayer(layerId);
    }

    if (displayType === "colors") {
      this.colorPoints(layerId);
      this.layerManager.soloLayer(layerId);

      layer.addEventListener("enabled", () => {
        this.log("Enabled colors event");
        this.colorPoints(layerId);
      });

      layer.addEventListener("disabled", () => {
        this.log("Disabled colors event");
        this.disableColor();
      });

      layer.addEventListener("newAttributeSelected", () => {
        this.log(`New attribute selected: ${layer.selectedAttribute}`);
        this.colorPoints(layerId);
      });
    }

    this.refreshGui();
  }

  async drawPoints(layerId: number) {
    this.log("Drawing points");
    this.geometry = new THREE.BufferGeometry();

    // Positions attribute
    const positions = await this.layerManager.getLayer(layerId).getTypedArray();
    this.geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    this.particleSystem = new THREE.Points(this.geometry, this.shaderMaterial);
    this.particleSystem.frustumCulled = false;

    this.scene.add(this.particleSystem);
  }

  async colorPoints(layerId: number) {
    this.log("Coloring points");
    if (!this.geometry) {
      throw new Error("Geometry is not initialized. Call drawPoints first.");
    }

    const layer = this.layerManager.getLayer(layerId);

    const colorCategories =
      await layer.getTypedArrayWithSelectedAttributeFiltered();

    const inHighlightMode = layer.selectedAttribute !== undefined;

    if (colorCategories instanceof Float32Array) {
      throw new Error("Color categories must be an Int32Array");
    }

    const colors = convertIntTypedArrayToCategoryColors(
      colorCategories,
      inHighlightMode
    );

    this.geometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3, true)
    );
  }

  disableColor() {
    if (!this.geometry) {
      throw new Error("Geometry is not initialized. Call drawPoints first.");
    }

    // Set the color attribute to a default value (white color)
    const defaultColor = new Float32Array(
      this.geometry.getAttribute("position").count * 3
    ).fill(1);
    this.geometry.setAttribute(
      "color",
      new THREE.BufferAttribute(defaultColor, 3, true)
    );
  }

  setOrbitControlOrigin(x: number, y: number, z: number) {
    this.controls.target.set(x, y, z);
  }

  log(message: string, css?: string) {
    if (this.debug) {
      console.log("%c" + message, css);
    }
  }
}
