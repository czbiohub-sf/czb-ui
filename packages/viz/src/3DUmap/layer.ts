import { ZarrArray, openArray, HTTPStore, NestedArray, TypedArray } from "zarr";
import { Attributes } from "zarr/types/attributes";
import { UserAttributes } from "zarr/types/types";

class Layer {
  name: string;
  type: "positions" | "colors";
  zarrArray: ZarrArray | null;
  label: string;
  enabled: boolean;

  constructor(name: string, type: "positions" | "colors", label: string) {
    this.name = name;
    this.type = type;
    this.zarrArray = null;
    this.label = label;
    this.enabled = true;
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

  enable() {
    this.enabled = true;
  }

  disable() {
    this.enabled = false;
  }

  isEnabled(): boolean {
    return this.enabled;
  }
}

class LayerManager {
  layers: Map<number, Layer>;

  constructor() {
    this.layers = new Map();
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
}

export { Layer, LayerManager };
