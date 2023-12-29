//CAPA DE PERSISTENCIA
//es la encargada de realizar el CRUD

import Cart from "./models/carts.model.js";

export default class CartMongo {
  constructor() {}
  async createModel(data) {
    let one = await Cart.create(data);
    return {
      message: "cart created!",
      response: { store_id: one._id },
    };
  }
  async readModels(user_id, state) {
    let all = await Cart.find(user_id, state);
    if (all) {
      return {
        message: "products found!",
        response: { products: all },
      };
    } else {
      return null;
    }
  }/*
  async readOneModel(id) {
    let one = await Cart.findById(id);
    //let one = await Toy.findOne({ _id: id })
    if (one) {
      return {
        message: "cart found!",
        response: one,
      };
    } else {
      return null;
    }
  }
  async updateModel(id, data) {
    //id del modelo a modificar
    //data lo que tengo que modificar
    //let one = await Toy.findByIdAndUpdate(id,data) //devuele el objeto antes de la modificación
    let one = await Cart.findByIdAndUpdate(id, data, { new: true });
    if (one) {
      return {
        message: "cart updated!",
        response: one,
      };
    } else {
      return null;
    }
  }
  async destroyModel(id) {
    let one = await Cart.findByIdAndDelete(id);
    if (one) {
      return {
        message: "cart destroyed!",
        response: one,
      };
    } else {
      return null;
    }
  }*/
}
