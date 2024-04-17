import * as THREE from "three";
// https://stackoverflow.com/a/56338877/10013136
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { ZarrArray, openArray, HTTPStore, NestedArray, TypedArray } from "zarr";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";

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
  zarrArray: ZarrArray | null;
  private needsUpdate: boolean;
  private shaderMaterial: THREE.ShaderMaterial;
  onChange: (() => void) | undefined;
  particleSystem: THREE.Points | null;
  debug = false;

  constructor(element: HTMLDivElement) {
    this.particleSystem = null;
    this.zarrArray = null;
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

    const gui = new GUI();

    // Add sample slider with gui, just for show
    const sizeController = gui.add(
      this.shaderMaterial.uniforms.size,
      "value",
      0,
      1
    );

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

  notifyChange() {
    if (this.onChange !== undefined) {
      this.onChange();
    }
  }

  onError(error: unknown) {
    console.error(error);
  }

  async loadZarr(store: string, path: string) {
    this.zarrArray = await openArray({
      store: new HTTPStore(store),
      path: path,
      mode: "r",
    });

    this.drawPoints();
  }

  async drawPoints() {
    const geometry = new THREE.BufferGeometry();

    // Positions attribute
    const positions = await this.getDataFromZarr("positions");
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions.data as Float32Array, 3)
    );

    // Colors attribute
    const colors = await this.getDataFromZarr("colors");
    geometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors.data as Float32Array, 3)
    );

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

  async getDataFromZarr(
    item: "positions" | "colors"
  ): Promise<NestedArray<TypedArray>> {
    if (this.zarrArray === null) {
      throw new Error("Zarr array not loaded");
    }

    switch (item) {
      case "positions":
        return this.zarrArray.get([0]) as Promise<NestedArray<TypedArray>>;
      case "colors":
        return this.zarrArray.get([1]) as Promise<NestedArray<TypedArray>>;
      default:
        throw new Error("Invalid item");
    }
  }
}
