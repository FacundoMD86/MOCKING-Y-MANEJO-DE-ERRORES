//CAPA INTERMEDIARIA ENTRE DAO Y SERVICIO
//SE COMUNICA CON EL DAO CORRESPONDIENTE
//TRANSFORMA LOS OBJETOS QUE CORRESPONDAN IMPLMENTANDO DTO
import UserDto from "../dto/users.dto.js";
import dao from "../dao/factory.js";
const { User } = dao;

export default class AuthRepository {
  constructor() {
    this.model = new User();
  }
  register = (data) => {
    let dataDto = new UserDto(data);
    let response = this.model.register(dataDto);
    return response;
  };
  login = (user) => this.model.login(user);
  signout = () => this.model.signout();
  read = () => this.model.read();
  readOne = (mail) => this.model.readOne(mail);
  updateOne = (mail, data) => this.model.updateOne(mail, data);
  destroyOne = (mail) => this.model.destroyOne(mail);
}
