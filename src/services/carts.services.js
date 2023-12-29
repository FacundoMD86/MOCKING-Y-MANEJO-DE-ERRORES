//CAPA DE SERVICIOS
//BRINDAR SERVICIOS SEGUN LA PERSISTENCIA
// HOY ES UN INTERMEDIARIO (ENTRE PERSISTENCIA Y CONTROL)
import CartMongo from "../dao/mongo/carts.mongo.js";

export default class CartsService {
  constructor() {
    //tiene que construir una instancia del modelo a la cual le tiene que configurar los diferentes servicios para el crud
    this.model = new CartMongo();
  }
  createService(data) {
    let response = this.model.createModel(data);
    return response;
  }
  readService(user_id, state) {
    let response = this.model.readModels(user_id, state);
    return response;
  }/*
  readOneService(id) {
    let response = this.model.readOneModel(id);
    return response;
  }
  updateService(id, data) {
    let response = this.model.updateModel(id, data);
    return response;
  }
  destroyService(id) {
    let response = this.model.destroyModel(id);
    return response;
  }*/
}
