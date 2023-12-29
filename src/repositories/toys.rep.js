//CAPA INTERMEDIARIA ENTRE DAO Y SERVICIO
//SE COMUNICA CON EL DAO CORRESPONDIENTE
//TRANSFORMA LOS OBJETOS QUE CORRESPONDAN IMPLMENTANDO DTO
import ToyDto from "../dto/toys.dto.js";
import ToyUpdDto from "../dto/toys.upd.dto.js";
import dao from "../dao/factory.js";
const { Toy } = dao;

export default class ToysRepository {
  constructor() {
    this.model = new Toy();
  }
  createRepository = (data) => {
    let dataDto = new ToyDto(data); //reasigno el valor de data con la transformación correspondiente del DTO
    let response = this.model.createModel(dataDto);
    return response;
  };
  readRepositories() {
    let response = this.model.readModels();
    return response;
  }
  readOneRepository(id) {
    let response = this.model.readOneModel(id);
    return response;
  }
  updateRepository(id, data) {
    data = new ToyUpdDto(data); //reasigno el valor de data con la transformación correspondiente del DTO
    let response = this.model.updateModel(id, data); //se podria hacer en un middleware también (pero no haríamos uso de la capa extra que hemos creado)
    return response;
  }
  destroyRepository(id) {
    let response = this.model.destroyModel(id);
    return response;
  }
}
