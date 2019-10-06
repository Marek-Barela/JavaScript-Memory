import FruitImage from "./js/models/FruitsImages";
import imagesList from "./js/data/images";
import { handleRenderMemoryImages } from "./js/views/memoryView";
import "./styles/style.sass";

const state = {};

const init = () => {
  imagesController()
}

const imagesController = () => {
  state.fruitsImages = imagesList.map(image => new FruitImage(image));
  handleRenderMemoryImages(state.fruitsImages);
}

init();