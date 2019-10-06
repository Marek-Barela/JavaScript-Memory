import uuid from "uuid";

class FruitImage {
  constructor(src) {
    this.id = uuid()
    this.src = src
  }
}

export default FruitImage;