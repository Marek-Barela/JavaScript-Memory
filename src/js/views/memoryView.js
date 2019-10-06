import DOMElemets from "../DOMSelectors";
import defaultImage from "../../images/hidden.png";

export const handleRenderMemoryImages = images => {
  return images.forEach(image => memoryImage(image))
}

const memoryImage = imageData => {
  const { id, url, isVisible, isCopy = false } = imageData;
  const markup = `
    <div class="memory__item">
      <img src=${url} alt="" />
      <div class="memory__item--overlay">
        ${ isVisible ? "" : `<img src=${defaultImage} alt="" data-image=${id} data-copy=${isCopy} />` }
      </div>
    </div>
  `;

  DOMElemets.memoryWrapper.insertAdjacentHTML("beforeend", markup);
}

export const displayMemoryImage = (id, copy, images) => {
  const filtredImage = images.filter(image => image.id === id);
  const getCorrectImage = filtredImage.find(image => image.isCopy === Boolean(copy))
  getCorrectImage.isVisible = true
}