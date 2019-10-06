import DOMElemets from "../DOMSelectors";
import defaultImage from "../../images/hidden.png";

export const handleRenderMemoryImages = images => {
  const cloneToGetPairsOfImages = [...images, ...images];
  const mixedArray = mixArrayOrder(cloneToGetPairsOfImages);
  return mixedArray.forEach(image => memoryImage(image))
}

const memoryImage = imageData => {
  const { id, src } = imageData;
  const markup = `
    <div class="memory__item">
      <img src=${src} alt="" />
      <div class="memory__item--overlay">
        <img src=${defaultImage} alt="" data-image=${id} />
      </div>
    </div>
  `;

  DOMElemets.memoryWrapper.insertAdjacentHTML("beforeend", markup);
}

const mixArrayOrder = imagesArray => {
  const newMixedArray = [];
  const arrLength = imagesArray.length;
  for(let i = 0; i < arrLength; i++) {
    const randomPosition = Math.floor(Math.random() * imagesArray.length);
    newMixedArray.push(imagesArray[randomPosition])
    imagesArray.splice(randomPosition, 1)
  }
  return newMixedArray
}