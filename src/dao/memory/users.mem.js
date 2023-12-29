//CAPA DE PERSISTENCIA (fs)
//es la encargada de realizar el CRUD

export default class User {
  static users = [];
  async register(data) {
    User.users.push(data);
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
    let all = User.users;
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
    let one = User.users.find((each) => each.mail === mail);
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
    let one = User.users.find((each) => each._id === id);
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
      let one = User.users.find((each) => each.mail === mail);
      if (one) {
        for (let prop in data) {
          one[prop] = data[prop];
        }
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
      let one = User.users.find((each) => each.mail === mail);
      if (one) {
        User.users = User.users.filter((each) => each.mail !== mail);
        users = User.users.filter((each) => each.mail !== mail);
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
