import dao from "../dao/factory.js";
const { Order } = dao;

export default class OrdersRepository {
  constructor() {
    this.model = new Order();
  }
  create(data) {
    let response = this.model.create(data)
    return response
  };
  read = (user_id) => this.model.read(user_id);
  update = (id, data) => this.model.update(id, data);
  destroy = (id) => this.model.destroy(id);
  //destroyAll = (user_id) => this.model.destroyAll(user_id);
  readAll = () => this.model.readAll();
  getGain = (user_id) => this.model.getGain(user_id);
}
