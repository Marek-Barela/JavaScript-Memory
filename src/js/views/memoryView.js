import DOMElemets from "../DOMSelectors";
import defaultImage from "../../images/hidden.png";

export const handleRenderMemoryImages = images => {
  const clonedArray = [...images, ...images];
  const mixedArray = mixArrayOrder(clonedArray);
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
  const mixedArray = [];
  const arrLength = imagesArray.length;
  for(let i = 0; i < arrLength; i++) {
    const position = Math.floor(Math.random() * imagesArray.length);
    mixedArray.push(imagesArray[position])
    imagesArray.splice(position, 1)
  }
  return mixedArray
}