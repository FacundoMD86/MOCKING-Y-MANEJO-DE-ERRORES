import AuthRepository from "../repositories/users.rep.js"

export default class AuthService {
  constructor() {
    //tiene que construir una instancia del repositorio para identificar a que dao se conectará
    this.repository = new AuthRepository();
  }
  register = (data) => this.repository.register(data);
  login = (user) => this.repository.login(user);
  signout = () => this.repository.signout();
  read = () => this.repository.read();
  readOne = (mail) => this.repository.readOne(mail);
  updateOne = (mail, data) => this.repository.updateOne(mail, data);
  destroyOne = (mail) => this.repository.destroyOne(mail);
}
