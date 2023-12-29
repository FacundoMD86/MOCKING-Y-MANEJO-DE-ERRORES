import OrdersController from "../controllers/orders.controller.js";
import MyRouter from "./router.js";

const controller = new OrdersController();

export default class OrdersRouter extends MyRouter {
  init() {
    //PARA CREAR UNA ORDEN DE UN USUARIO
    this.create("/", ["PUBLIC"], async (req, res, next) => {
      try {
        let data = {
          type: "caño",
          size: 0.25,
          quantity: 10,
          price: 8123,
          user_id: "658ce640a8cde83cc41c9eeb",
        };
        let response = await controller.create(data);
        if (response) {
          return res.sendSuccessCreate(response);
        } else {
          return res.sendFailed();
        }
      } catch (error) {
        next(error);
      }
    });
    this.read("/", ["PUBLIC"], async (req, res, next) => {
      try {
        let user_id = "658ce640a8cde83cc41c9eeb";
        let response = await controller.read(user_id);
        if (response) {
          return res.sendSuccess(response);
        } else {
          return res.sendNotFound("order");
        }
      } catch (error) {
        next(error)
      }
    })
    //PARA ACTUALIZAR UNA ORDEN
    this.update("/:id", ["PUBLIC"], async (req, res, next) => {
      try {
        let { id } = req.params;
        let data = req.body;
        let response = await controller.update(id, data);
        if (response) {
          return res.sendSuccess(response);
        } else {
          return res.sendNotFound("order");
        }
      } catch (error) {
        next(error);
      }
    });
    //PARA ELIMINAR UNA ORDEN
    this.destroy("/:id", ["PUBLIC"], async (req, res, next) => {
      try {
        let { id } = req.params;
        let response = await controller.destroy(id);
        if (response) {
          return res.sendSuccess(response);
        } else {
          return res.sendNotFound("order");
        }
      } catch (error) {
        next(error);
      }
    });
  }
}