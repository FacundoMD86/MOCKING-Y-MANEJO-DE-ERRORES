import Producto from "./models/products.model.js";

export default class ProductMongo {
  constructor() {}
  async createModel(data) {
    let one = await Producto.create(data);
    return {
      message: "product created!",
      response: { prod_id: one._id },
    };
  }
  async readModels() {
    let all = await Producto.find();
    if (all) {
      return {
        message: "products found!",
        response: { prod: all },
      };
    } else {
      return null;
    }
  }
  async readOneModel(id) {
    let one = await Producto.findById(id);
    //let one = await Toy.findOne({ _id: id })
    if (one) {
      return {
        message: "product found!",
        response: one,
      };
    } else {
      return null;
    }
  }
  async updateModel(id, data) {
    let one = await Producto.findByIdAndUpdate(id, data, { new: true });
    if (one) {
      return {
        message: "product updated!",
        response: one,
      };
    } else {
      return null;
    }
  }
  async destroyModel(id) {
    let one = await Producto.findByIdAndDelete(id);
    if (one) {
      return {
        message: "product destroyed!",
        response: one,
      };
    } else {
      return null;
    }
  }
}