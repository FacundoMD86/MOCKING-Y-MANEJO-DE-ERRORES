import ToysRepository from "../repositories/toys.rep.js";

export default class ToysService {
  constructor() {
    //tiene que construir una instancia del modelo a la cual le tiene que configurar los diferentes servicios para el crud
    this.repository = new ToysRepository();
  }
  createService(data) {
    let response = this.repository.createRepository(data);
    return response;
  }
  readService(){
    let response = this.repository.readRepositories();
    return response
  }
  readOneService(id){
    let response = this.repository.readOneRepository(id);
    return response
  }
  updateService(id,data){
    let response = this.repository.updateRepository(id, data);
    return response
  }
  destroyService(id){
    let response = this.repository.destroyRepository(id);
    return response
  }
}
