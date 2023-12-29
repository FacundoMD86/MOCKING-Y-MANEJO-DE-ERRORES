//CAPA DE PERSISTENCIA (mongo)
//es la encargada de realizar el CRUD

import User from "./models/user.model.js";

export default class AuthMongo {
  constructor() {}
  async register(data) {
    let one = await User.create(data);
    return {
      message: "user registered!",
      response: "user_id: "+ one._id,
    };
  }
  async login(user) {
    return {
      message: "user logged in",
      response: true,
    };
  }
  signout() {
    return {
      message: "user signed out!",
      response: true,
    };
  }
  async read() {
    let all = await User.find({}, "-password");
    if (all.length > 0) {
      return {
        message: "users found!",
        response: { users: all },
      };
    } else {
      return null;
    }
  }
  async readOne(mail) {
    let one = await User.findOne({ mail });
    if (one) {
      return {
        message: "user found!",
        response: one,
      };
    } else {
      return {
        message: "user not found or error occurred",
        response: null,
      };
    }
  }
  async readById(id) {
    let one = await User.findById(id);
    if (one) {
      return {
        message: "user found!",
        response: one,
      };
    } else {
      return null;
    }
  }
  async updateOne(mail, data) {
    let one = await User.findOneAndUpdate({ mail }, data, { new: true });
    if (one) {
      return {
        message: "user updated!",
        response: one,
      };
    } else {
      return null;
    }
  }
  async destroyOne(mail) {
    let one = await User.findOneAndDelete({ mail });
    if (one) {
      return {
        message: "user destroyed!",
        response: one,
      };
    } else {
      return null;
    }
  }
}
