import { scaleSequential, rgb, interpolateCool } from "d3";

function convertIntTypedArrayToCategoryColors(
  intTypedArray: Int32Array
): Uint8Array {
  // intTypedArray looks like [0, 0, 2, 1, 2] where each number is a category
  const colorScale = scaleSequential(interpolateCool);
  const maxValue = Math.max(...intTypedArray);

  const categoryColors = new Uint8Array(intTypedArray.length * 3);
  for (let i = 0; i < intTypedArray.length; i++) {
    const color = rgb(colorScale(intTypedArray[i] / maxValue));
    categoryColors[i * 3] = color.r;
    categoryColors[i * 3 + 1] = color.g;
    categoryColors[i * 3 + 2] = color.b;
  }
  return categoryColors;
}

export { convertIntTypedArrayToCategoryColors };
