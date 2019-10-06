import uuid from "uuid";

class FruitImages {
  constructor(images) {
    this.images = images
    
    this.originalMemoryList = []
    this.clonedMemoryListToGetPairsOfImages = []
  }

  getOriginalMemoryList() {
    this.originalMemoryList = this.images.map(image => {
      return {
        id: uuid(),
        url: image,
        isVisible: false,
        isCopy: false 
      }
    })
  }

  getClonedMemoryListToGetPairsOfImages() {
    const getCopyOfOriginal = this.originalMemoryList.map(item => { 
      return { 
        ...item, 
        isCopy: true 
    }})
    this.clonedMemoryListToGetPairsOfImages = [...this.originalMemoryList, ...getCopyOfOriginal];
  }

  mixClonedMemoryListOreder() {
    const newMixedArray = [];
    const arrayCopy = this.clonedMemoryListToGetPairsOfImages;
    const arrLength = arrayCopy.length;
    for(let i = 0; i < arrLength; i++) {
      const randomPosition = Math.floor(Math.random() * arrayCopy.length);
      newMixedArray.push(arrayCopy[randomPosition])
      arrayCopy.splice(randomPosition, 1)
    }
    this.clonedMemoryListToGetPairsOfImages = newMixedArray;
  }
}

export default FruitImages;