import args from "../config/arguments.js";      //necesito saber la persistencia

export default class ToyDto {
  constructor(obj) {
    obj.title && (this.title = obj.title)
    obj.description && (this.description = obj.description)
    obj.stock && (this.stock = Number(obj.stock))
    obj.url_photo && (this.url_photo = obj.url_photo)
    obj.price && (this.price = Number(obj.price))
    if (args.persistence === "FS" || args.persistence === "MEMORY") {
      this.updatedAt = new Date();
    }
  }
}
