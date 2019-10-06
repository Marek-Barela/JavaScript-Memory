import DOMElements from "../DOMSelectors";
import defaultImage from "../../images/hidden.png";

export const handleRenderMemoryImages = images => {
  clearMemoryView();
  renderMemoryImages(images);
};

const clearMemoryView = () => {
  DOMElements.memoryWrapper.innerHTML = "";
};

const renderMemoryImages = images => {
  return images.forEach(image => memoryImage(image));
};

const memoryImage = imageData => {
  const { id, url, isVisible, isCopy = false, matched } = imageData;
  const markup = matched ? `<div></div>` : `
    <div class="memory__item">
      <img src=${url} alt="" />
      <div class="memory__item--overlay">
        ${isVisible ? "" : `<img src=${defaultImage} alt="" data-image=${id} data-copy=${isCopy} />`}
      </div>
    </div>
  `;

  DOMElements.memoryWrapper.insertAdjacentHTML("beforeend", markup);
};
