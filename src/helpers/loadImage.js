const images = require.context("../images", true);

export default function loadImage(image) {
  return images(`./${image}`);
}
