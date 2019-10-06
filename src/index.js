import FruitImages from "./js/models/FruitImages";
import imagesList from "./js/data/images";
import DOMElements from './js/DOMSelectors';
import { handleRenderMemoryImages, displayMemoryImage } from "./js/views/memoryView";
import "./styles/style.sass";

const state = {
  activeCards: []
};

const init = () => {
  imagesController()
}

const imagesController = () => {
  state.fruitImages = new FruitImages(imagesList);
  state.fruitImages.getOriginalMemoryList();
  state.fruitImages.getClonedMemoryListToGetPairsOfImages();
  state.fruitImages.mixClonedMemoryListOreder();
  console.log(state.fruitImages)
  handleRenderMemoryImages(state.fruitImages.clonedMemoryListToGetPairsOfImages);
}

DOMElements.memoryWrapper.addEventListener("click", (e) => {
  if(!!e.target.dataset.image) {
    displayMemoryImage(e.target.dataset.image, state.fruitImages.clonedMemoryListToGetPairsOfImages);
  }
})

init();