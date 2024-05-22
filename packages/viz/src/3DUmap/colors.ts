import { scaleOrdinal, rgb, schemeCategory10 } from "d3";

function convertIntTypedArrayToCategoryColors(
  intTypedArray: Int32Array
): Uint8Array {
  // intTypedArray looks like [0, 0, 2, 1, 2] where each number is a category
  const colorScale = scaleOrdinal(schemeCategory10);
  const categoryColors = new Uint8Array(intTypedArray.length * 3);
  for (let i = 0; i < intTypedArray.length; i++) {
    const color = rgb(colorScale(intTypedArray[i].toString()));
    categoryColors[i * 3] = color.r;
    categoryColors[i * 3 + 1] = color.g;
    categoryColors[i * 3 + 2] = color.b;
  }
  return categoryColors;
}

export { convertIntTypedArrayToCategoryColors };
