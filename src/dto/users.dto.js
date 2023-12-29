import crypto from "crypto"; //modulo nativo de nodejs para crear codigos aleatorios
import args from "../config/arguments.js"; //necesito saber la persistencia
import { hashSync, genSaltSync } from "bcrypt";

export default class UserDto {
  constructor(obj) {
    this.name = obj.name;
    this.mail = obj.mail;
    this.password = hashSync(obj.password, genSaltSync(10));
    this.url_photo = obj.url_photo;
    obj.role ? (this.role = obj.role) : (this.role = 0);
    if (args.persistence === "FS" || args.persistence === "MEMORY") {
      this.createdAt = new Date();
      this.updatedAt = new Date();
      this.__v = 0;
      this._id = crypto.randomBytes(12).toString("hex");
    }
  }
}
