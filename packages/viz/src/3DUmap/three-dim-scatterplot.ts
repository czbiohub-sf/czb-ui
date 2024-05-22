import * as THREE from "three";
// https://stackoverflow.com/a/56338877/10013136
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { ZarrArray, openArray, HTTPStore, NestedArray, TypedArray } from "zarr";
import { Attributes } from "zarr/types/attributes";
import { UserAttributes } from "zarr/types/types";
import GUI from "lil-gui";
import { LayerManager } from "./layer";

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
  private needsUpdate: boolean;
  private shaderMaterial: THREE.ShaderMaterial;
  private particleSystem: THREE.Points | null;
  private layers: LayerManager;
  private gui: GUI;
  private layersGuiFolder: GUI;
  onChange: (() => void) | undefined;
  debug = false;

  constructor(element: HTMLDivElement) {
    this.particleSystem = null;
    this.layers = new LayerManager();
    this.needsUpdate = false;
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

    // TODO: WebGL compatibility check
    // https://threejs.org/docs/index.html#manual/en/introduction/WebGL-compatibility-check

    this.animate();
  }

  private async animate() {
    // Use bind to ensure `this` inside animate() always refers to the ThreeDimScatterPlot instance,
    // even when the method is passed as a callback to requestAnimationFrame.
    requestAnimationFrame(this.animate.bind(this));

    this.controls.update();

    this.renderer.render(this.scene, this.camera);
  }

  private refreshGui() {
    for (const [layerId, layer] of this.layers.layers) {
      const layerFolder = this.layersGuiFolder.addFolder(layer.label);
      layerFolder.add(layer, "enabled").onChange(() => {
        this.needsUpdate = true;
      });
    }
  }

  notifyChange() {
    if (this.onChange !== undefined) {
      this.onChange();
    }
  }

  onError(error: unknown) {
    console.error(error);
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

    const layerId = this.layers.addLayer(name, displayType, label);
    const layer = this.layers.getLayer(layerId);
    layer.zarrArray = zarrToLoad;

    if (displayType === "positions") {
      await this.drawPoints(layerId);
    }

    this.refreshGui();
  }

  async drawPoints(layerId: number) {
    this.log("Drawing points");
    const geometry = new THREE.BufferGeometry();

    // Positions attribute
    const positions = await this.layers.getLayer(layerId).getTypedArray();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    this.needsUpdate = true;

    this.particleSystem = new THREE.Points(geometry, this.shaderMaterial);
    this.particleSystem.frustumCulled = false;

    this.scene.add(this.particleSystem);
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
