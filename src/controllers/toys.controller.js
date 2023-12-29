//CAPA CONTROLADORA
//LA ENCARGADA DE DIRIGIRME HACIA EL SERVICIO QUE CORRESPONDA (ES SOLO INTERMEDIARIA)
import ToysService from "../services/toy.services.js";

export default class ToysController {
  constructor() {
    //TIENE QUE CONSTRUIR UNA INSTANCIA DE LOS SERVICIOS DEL MODELO
    this.service = new ToysService();
  }
  createController(data) {
    let response = this.service.createService(data);
    return response;
  }
  readController(){
    let response = this.service.readService()
    return response
  }
  readOneController(id){
    let response = this.service.readOneService(id)
    return response
  }
  updateController(id,data){
    let response = this.service.readOneService(id,data)
    return response
  }
  destroycontroller(id){
    let response = this.service.destroyService(id)
    return response
  }
}
