import DOMElemets from "../DOMSelectors";
import defaultImage from "../../images/hidden.png";

export const handleRenderMemoryImages = images => {
  return images.forEach(image => memoryImage(image))
}

const memoryImage = imageData => {
  const { id, url } = imageData;
  const markup = `
    <div class="memory__item">
      <img src=${url} alt="" />
      <div class="memory__item--overlay">
        <img src=${defaultImage} alt="" data-image=${id} />
      </div>
    </div>
  `;

  DOMElemets.memoryWrapper.insertAdjacentHTML("beforeend", markup);
}

export const displayMemoryImage = (id, images) => {
  console.log({id, images})
}