import AuthService from "../services/users.service.js";

export default class AuthController {
  constructor() {
    this.service = new AuthService();
  }
  register = (data) => this.service.register(data);
  login = (user) => this.service.login(user);
  signout = () => this.service.signout();
  read = () => this.service.read();
  readOne = (mail) => this.service.readOne(mail);
  updateOne = (mail, data) => this.service.updateOne(mail, data);
  destroyOne = (mail) => this.service.destroyOne(mail);
}
