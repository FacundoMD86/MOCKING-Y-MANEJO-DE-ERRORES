//CAPA DE PERSISTENCIA (fs)
//es la encargada de realizar el CRUD

import fs from "fs";

export default class User {
  constructor() {
    this.users = [];
    this.path = "./src/dao/fs/files/users.json";
    this.init();
  }
  init() {
    let file = fs.existsSync(this.path);
    if (!file) {
      fs.writeFileSync(this.path, "[]");
    } else {
      this.users = JSON.parse(fs.readFileSync(this.path, "UTF-8"));
    }
    return true;
  }
  async register(data) {
    this.users.push(data);
    let data_json = JSON.stringify(this.users, null, 2);
    await fs.promises.writeFile(this.path, data_json);
    return {
      message: "user registered!",
      response: { user_id: data._id },
    };
  }
  login(user) {
    return {
      message: "user logged in!",
      response: { user },
    };
  }
  signout() {
    return {
      message: "user signed out!",
      response: null,
    };
  }
  read() {
    let all = this.users;
    all.map((each) => delete each.password);
    if (all.length > 0) {
      return {
        message: "users found!",
        response: { users: all },
      };
    } else {
      return null;
    }
  }
  readOne(mail) {
    let one = this.users.find((each) => each.mail === mail);
    if (one) {
      return {
        message: "user found!",
        response: one,
      };
    } else {
      return null;
    }
  }
  readById(id) {
    let one = this.users.find((each) => each._id === id);
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
    try {
      let one = this.users.find((each) => each.mail === mail);
      if (one) {
        for (let prop in data) {
          one[prop] = data[prop];
        }
        let data_json = JSON.stringify(this.users, null, 2);
        await fs.promises.writeFile(this.path, data_json);
        return {
          message: "user updated!",
          response: one,
        };
      } else {
        return null;
      }
    } catch (error) {
      return error;
    }
  }
  async destroyOne(mail) {
    try {
      let one = this.users.find((each) => each.mail === mail);
      if (one) {
        this.users = this.users.filter((each) => each.mail !== mail);
        let data_json = JSON.stringify(this.users, null, 2);
        await fs.promises.writeFile(this.path, data_json);
        return {
          message: "user destroyed!",
          response: one,
        };
      } else {
        return null;
      }
    } catch (error) {
      return false;
    }
  }
}
