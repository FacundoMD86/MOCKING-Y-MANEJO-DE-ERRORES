import ProductsService from "../services/products.services.js";

export default class ProductsController {
  constructor() {
    this.service = new ProductsService();
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