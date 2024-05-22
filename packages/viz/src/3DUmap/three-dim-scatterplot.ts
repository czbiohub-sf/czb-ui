import * as THREE from "three";
// https://stackoverflow.com/a/56338877/10013136
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { ZarrArray, openArray, HTTPStore, NestedArray, TypedArray } from "zarr";
import { UserAttributes } from "zarr/types/types";
import GUI from "lil-gui";
import { LayerManager } from "./layer";
import { convertIntTypedArrayToCategoryColors } from "./colors";

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
  private isAutoRotating: boolean = true;
  private geometry: THREE.BufferGeometry | null = null;
  debug = false;

  constructor(element: HTMLDivElement) {
    this.particleSystem = null;
    this.layerManager = new LayerManager();
    this.shaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        size: { value: 0.1 },
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

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(element.clientWidth, element.clientHeight);
    element.appendChild(this.renderer.domElement);

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
    this.gui.add(this, "isAutoRotating").name("Auto rotate");

    // TODO: WebGL compatibility check
    // https://threejs.org/docs/index.html#manual/en/introduction/WebGL-compatibility-check

    this.animate();
  }

  private async animate() {
    // Use bind to ensure `this` inside animate() always refers to the ThreeDimScatterPlot instance,
    // even when the method is passed as a callback to requestAnimationFrame.
    requestAnimationFrame(this.animate.bind(this));

    this.controls.update();

    if (this.isAutoRotating) {
      this.scene.rotation.y -= 0.003;
    }

    this.renderer.render(this.scene, this.camera);
  }

  private refreshGui() {
    // Clear layers folder
    this.layersGuiFolder.destroy();
    this.layersGuiFolder = this.gui.addFolder("Layers");
    for (const layer of this.layerManager.layers) {
      // Add checkbox
      const layerInstance = layer[1];

      this.layersGuiFolder
        .add(layerInstance, "enabled")
        .name(layerInstance.label);
    }
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
    }

    if (displayType === "colors") {
      await this.colorPoints(layerId);
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

    const colorCategories = await this.layerManager
      .getLayer(layerId)
      .getTypedArray();

    if (colorCategories instanceof Float32Array) {
      throw new Error("Color categories must be an Int32Array");
    }

    const colors = convertIntTypedArrayToCategoryColors(colorCategories);

    this.geometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3, true)
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
