import { ZarrArray, openArray, HTTPStore, NestedArray, TypedArray } from "zarr";
import { Attributes } from "zarr/types/attributes";
import { UserAttributes } from "zarr/types/types";

class Layer extends EventTarget {
  name: string;
  type: "positions" | "colors";
  zarrArray: ZarrArray | null;
  label: string;
  enabled: boolean;

  constructor(name: string, type: "positions" | "colors", label: string) {
    super();
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
    return nestedArray.data as Int32Array | Float32Array;
  }

  getAttributes() {
    this.checkIfZarrArrayLoaded();

    return this.zarrArray!.attrs as Attributes<UserAttributes>;
  }

  enable() {
    this.enabled = true;
    this.dispatchEvent(new Event("enabled"));
  }

  disable() {
    this.enabled = false;
    this.dispatchEvent(new Event("disabled"));
  }

  isEnabled(): boolean {
    return this.enabled;
  }
}

class LayerManager {
  layers: Map<number, Layer>;
  typeLookup: Record<"positions" | "colors", number[]>;

  constructor() {
    this.layers = new Map();
    this.typeLookup = {
      positions: [],
      colors: [],
    };
  }

  addLayer(name: string, type: "positions" | "colors", label: string): number {
    const id = this.layers.size;
    const layer = new Layer(name, type, label);
    this.layers.set(id, layer);

    this.typeLookup[type].push(id);

    return id;
  }

  getLayer(id: number): Layer {
    if (this.layers.has(id)) {
      return this.layers.get(id)!;
    } else {
      throw new Error(`Layer with id ${id} does not exist`);
    }
  }

  private soloColorLayer(layerId: number) {
    if (this.getLayer(layerId).type !== "colors") {
      return;
    }

    console.log("soloColorLayer");

    this.typeLookup.colors.forEach((id) => {
      if (id !== layerId) {
        this.getLayer(id).disable();
      } else {
        this.getLayer(id).enable();
      }
    });
  }

  private soloPositionLayer(layerId: number) {
    if (this.getLayer(layerId).type !== "positions") {
      return;
    }

    console.log("soloPositionLayer");

    this.typeLookup.positions.forEach((id) => {
      if (id !== layerId) {
        this.getLayer(id).disable();
      } else {
        this.getLayer(id).enable();
      }
    });
  }

  soloLayer(layerId: number) {
    this.soloColorLayer(layerId);
    this.soloPositionLayer(layerId);
  }
}

export { Layer, LayerManager };
