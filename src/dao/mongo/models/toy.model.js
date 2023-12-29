import { model, Schema, Types } from "mongoose";

let collection = "toys";
let schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  stock: { type: Number, required: true },
  url_photo: { type: String, required: true },
  price: { type: Number, required: true },
});
let Toy = model(collection, schema);
export default Toy;
