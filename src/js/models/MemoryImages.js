import uuid from "uuid";

class MemoryImages {
  constructor(images) {
    this.images = images
    this.originalMemoryList = []
    this.clonedMemoryListToGetPairsOfImages = []
    this.activeCards = []
  }

  getOriginalMemoryList() {
    this.originalMemoryList = this.images.map(image => {
      return {
        id: uuid(),
        url: image,
        isVisible: false,
        isCopy: false,
        matched: false
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

  displayMemoryImage(id, copy) {
    const filtredImage = this.clonedMemoryListToGetPairsOfImages.filter(image => image.id === id);
    const getCorrectImage = filtredImage.find(image => image.isCopy === JSON.parse(copy));
    getCorrectImage.isVisible = true
    this.activeCards.push(getCorrectImage)
  }

  checkIfImagesMatch() {
    const checkIfImagesAreTheSame = this.activeCards[0].id === this.activeCards[1].id;
    if(checkIfImagesAreTheSame) {
      this.activeCards.map(item => item.matched = true)
      this.activeCards.length = 0
    } else {
      this.activeCards.length = 0
      this.clonedMemoryListToGetPairsOfImages.map(item => item.isVisible = false)
    }
  }
}

export default MemoryImages;