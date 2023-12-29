//CAPA INTERMEDIARIA ENTRE DAO Y SERVICIO
//SE COMUNICA CON EL DAO CORRESPONDIENTE
//TRANSFORMA LOS OBJETOS QUE CORRESPONDAN IMPLMENTANDO DTO
import CartDto from "../dto/carts.dto.js";
import dao from "../dao/factory.js";
const { Cart } = dao;

export default class CartsRepository {
  constructor() {
    this.model = new Cart();
  }
  createRepository = (data) => {
    let dataDto = new CartDto(data);
    let response = this.model.createModel(dataDto);
    return response;
  };
  filterRepositories = (user_id, state) => this.model.filterModels(user_id, state);
  updateRepository = (id, data) => this.model.updateModel(id, data);
  destroyRepository = (id) => this.model.destroyModel(id);
}
