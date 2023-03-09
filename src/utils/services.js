import { allImages } from "../utils/imageData";

export function getAllImages() {
  const imageList = allImages;
  return imageList;
}

export function filterImages(imageType) {
  let filteredImages = getAllImages().filter((type) => type.type === imageType);
  return filteredImages;
}
