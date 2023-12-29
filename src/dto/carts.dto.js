import crypto from "crypto"; //modulo nativo de nodejs para crear codigos aleatorios
import args from "../config/arguments.js"; //necesito saber la persistencia

export default class CartDto {
  constructor(obj) {
    this.toy_id = obj.toy_id;
    this.user_id = obj.user_id;
    obj.state ? (this.state = obj.state) : (this.state = "pending");
    obj.quantity ? (this.quantity = obj.quantity) : (this.quantity = 1);
    if (args.persistence === "FS" || args.persistence === "MEMORY") {
      this.createdAt = new Date();
      this.updatedAt = new Date();
      this.__v = 0;
      this._id = crypto.randomBytes(12).toString("hex");
    }
  }
}
