//CAPA DE PERSISTENCIA (fs)
//es la encargada de realizar el CRUD

import fs from "fs";

export default class Product {
  constructor() {
    this.toys = [];
    this.path = "./src/dao/fs/files/toys.json";
    this.init();
  }
  init() {
    let file = fs.existsSync(this.path);
    if (!file) {
      fs.writeFileSync(this.path, "[]");
    } else {
      this.toys = JSON.parse(fs.readFileSync(this.path, "UTF-8"));
    }
    return true;
  }
  async createModel(data) {
    //data debe venir con _id en este caso
    //console.log(data);
    this.toys.push(data);
    let data_json = JSON.stringify(this.toys, null, 2);
    await fs.promises.writeFile(this.path, data_json);
    return {
      message: "toy created!",
      response: data._id,
    };
  }
  readModels() {
    let all = this.toys;
    if (this.toys.length > 0) {
      return {
        message: "toys found!",
        response: all,
      };
    } else {
      return null;
    }
  }
  readOneModel(id) {
    let one = this.toys.find((each) => each._id == id);
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
    try {
      let one = this.toys.find((each) => each._id == id);
      if (one) {
        for (let prop in data) {
          one[prop] = data[prop];
        }
        let data_json = JSON.stringify(this.toys, null, 2);
        await fs.promises.writeFile(this.path, data_json);
        return {
          message: "toy updated!",
          response: one,
        };
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async destroyModel(id) {
    try {
      let one = this.toys.find((each) => each._id == id);
      if (one) {
        this.toys = this.toys.filter((each) => each._id !== id);
        let data_json = JSON.stringify(this.toys, null, 2);
        await fs.promises.writeFile(this.path, data_json);
        return {
          message: "toy destroyed!",
          response: one,
        };
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
