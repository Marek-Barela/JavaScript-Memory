import MemoryImages from "./js/models/MemoryImages";
import imagesList from "./js/data/images";
import DOMElements from "./js/DOMSelectors";
import { handleRenderMemoryImages } from "./js/views/memoryView";
import "./styles/style.sass";

const state = {};

const imagesController = () => {
  state.fruitImages = new MemoryImages(imagesList);
  state.fruitImages.getOriginalMemoryList();
  state.fruitImages.getClonedMemoryListToGetPairsOfImages();
  state.fruitImages.mixClonedMemoryListOreder();
  handleRenderMemoryImages(state.fruitImages.clonedMemoryListToGetPairsOfImages);
};

DOMElements.memoryWrapper.addEventListener("click", e => {
  if (!!e.target.dataset.image && state.fruitImages.activeCards.length === 0) {
    selectFirstMemoryElement(e);
  } else if (!!e.target.dataset.image) {
    selectSecondMemoryElement(e);
  }
});

DOMElements.resetButton.addEventListener("click", imagesController)

const selectFirstMemoryElement = (e) => {
  const { image, copy } = e.target.dataset;
  state.fruitImages.displayMemoryImage(image, copy);
  handleRenderMemoryImages(state.fruitImages.clonedMemoryListToGetPairsOfImages);
}

const selectSecondMemoryElement = (e) => {
  const { image, copy } = e.target.dataset;
  state.fruitImages.displayMemoryImage(image, copy);
  handleRenderMemoryImages(state.fruitImages.clonedMemoryListToGetPairsOfImages);
  state.fruitImages.checkIfImagesMatch();
  setTimeout(() => {
    handleRenderMemoryImages(state.fruitImages.clonedMemoryListToGetPairsOfImages);
  }, 600);
}

document.addEventListener("DOMContentLoaded", imagesController);
