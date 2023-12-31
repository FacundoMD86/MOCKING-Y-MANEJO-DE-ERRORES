import OrdersService from "../services/orders.service.js";

export default class OrdersController {
  constructor() {
    this.service = new OrdersService();
  }
  create(data) {
    let response = this.service.create(data);
    return response;
  }
  read = (user_id) => this.service.read(user_id);
  update = (id, data) => this.service.update(id, data);
  destroy = (id) => this.service.destroy(id);
  //destroyAll = (user_id) => this.service.destroyAll(user_id);
  readAll = () => this.service.readAll();
  getGain = (user_id) => this.service.getGain(user_id);
}
