import { ZarrArray, openArray, HTTPStore, NestedArray, TypedArray } from "zarr";
import { Attributes } from "zarr/types/attributes";
import { UserAttributes } from "zarr/types/types";

class Layer {
  name: string;
  type: "positions" | "colors";
  zarrArray: ZarrArray | null;
  label: string;

  constructor(name: string, type: "positions" | "colors", label: string) {
    this.name = name;
    this.type = type;
    this.zarrArray = null;
    this.label = label;
  }

  async loadZarr(store: string, path: string) {
    const zarrToLoad = await openArray({
      store: new HTTPStore(store),
      path: path,
      mode: "r",
    });

    this.zarrArray = zarrToLoad;
  }

  checkIfZarrArrayLoaded() {
    if (this.zarrArray === null) {
      throw new Error("Zarr array not loaded");
    }
  }

  async getTypedArray() {
    this.checkIfZarrArrayLoaded();

    const nestedArray =
      (await this.zarrArray!.get()) as NestedArray<TypedArray>;
    return nestedArray.data as Float32Array;
  }

  getAttributes() {
    this.checkIfZarrArrayLoaded();

    return this.zarrArray!.attrs as Attributes<UserAttributes>;
  }
}

class LayerManager {
  layers: Map<number, Layer>;
  enabledLayers: Set<number>;

  constructor() {
    this.layers = new Map();
    this.enabledLayers = new Set();
  }

  addLayer(name: string, type: "positions" | "colors", label: string): number {
    const id = this.layers.size;
    const layer = new Layer(name, type, label);
    this.layers.set(id, layer);
    return id;
  }

  getLayer(id: number): Layer {
    if (this.layers.has(id)) {
      return this.layers.get(id)!;
    } else {
      throw new Error(`Layer with id ${id} does not exist`);
    }
  }

  enableLayer(id: number) {
    if (this.layers.has(id)) {
      this.enabledLayers.add(id);
    } else {
      throw new Error(`Layer with id ${id} does not exist`);
    }
  }

  disableLayer(id: number) {
    this.enabledLayers.delete(id);
  }

  isLayerEnabled(id: number): boolean {
    return this.enabledLayers.has(id);
  }
}

export { Layer, LayerManager };
