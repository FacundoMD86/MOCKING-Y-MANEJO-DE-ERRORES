//CAPA DE PERSISTENCIA
//es la encargada de realizar el CRUD

import Toy from "./models/toy.model.js";

export default class ToyModel {
  constructor() {}
  async createModel(data) {
    let one = await Toy.create(data);
    return {
      message: "toy created!",
      response: { toy_id: one._id },
    };
  }
  async readModels() {
    let all = await Toy.find();
    if (all) {
      return {
        message: "toys found!",
        response: { toys: all },
      };
    } else {
      return null;
    }
  }
  async readOneModel(id) {
    let one = await Toy.findById(id);
    //let one = await Toy.findOne({ _id: id })
    if (one) {
      return {
        message: "toy found!",
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
    let one = await Toy.findByIdAndUpdate(id, data, { new: true });
    if (one) {
      return {
        message: "toy updated!",
        response: one,
      };
    } else {
      return null;
    }
  }
  async destroyModel(id) {
    let one = await Toy.findByIdAndDelete(id);
    if (one) {
      return {
        message: "toy destroyed!",
        response: one,
      };
    } else {
      return null;
    }
  }
}
