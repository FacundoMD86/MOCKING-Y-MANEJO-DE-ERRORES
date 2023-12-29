import OrdersRepository from "../repositories/orders.rep.js";

export default class OrdersService {
  constructor() {
    this.repository = new OrdersRepository();
  }
  create(data) {
    let response = this.repository.create(data);
    return response;
  }
  read = (user_id) => this.repository.read(user_id);
  update = (id, data) => this.repository.update(id, data);
  destroy = (id) => this.repository.destroy(id);
  //destroyAll = (user_id) => this.repository.destroyAll(user_id);
  readAll = () => this.repository.readAll();
  getGain = (user_id) => this.repository.getGain(user_id);
}
