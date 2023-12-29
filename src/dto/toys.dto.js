import crypto from "crypto"; //modulo nativo de nodejs para crear codigos aleatorios
import args from "../config/arguments.js"; //necesito saber la persistencia

export default class ToyDto {
  constructor(obj) {
    this.title = obj.title;
    this.description = obj.description;
    this.stock = obj.stock;
    this.url_photo = obj.url_photo;
    this.price = obj.price;
    if (args.persistence === "FS" || args.persistence === "MEMORY") {
      this.createdAt = new Date();
      this.updatedAt = new Date();
      this.__v = 0;
      this._id = crypto.randomBytes(20).toString("hex");
    }
  }
}
