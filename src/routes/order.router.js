import passport from "passport";
import OrdersController from "../controllers/orders.controller.js";
import MyRouter from "./router.js";

const controller = new OrdersController();

export default class OrdersRouter extends MyRouter {
  init() {
    //PARA CREAR UNA ORDEN DE UN USUARIO
    this.create("/", ["PUBLIC"], passport.authenticate('jwt'), async (req, res, next) => {
      try {
        let data = req.body;
        data.user_id = req.user._id;
        //req.user lo agrega la política de privacidad
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
    //PARA LEER LAS ORDENES DE UN USUARIO
    this.read(
      "/",
      ["PUBLIC"],
      passport.authenticate("jwt"),
      async (req, res, next) => {
        try {
          let user_id = req.user._id;
          //req.user lo agrega la política de privacidad
          let response = await controller.read(user_id);
          if (response) {
            return res.sendSuccess(response);
          } else {
            return res.sendNotFound("order");
          }
        } catch (error) {
          next(error);
        }
      }
    );
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
    //PARA COMPRAR TODAS LAS ORDENES, CREAR TICKET Y ELIMINAR LOS DOCS (DEBERIA CAMBIAR DE ESTADO)
   /* this.create("/ticket", ["PUBLIC"], async (req, res, next) => {
      try {
        let user_id = req.user._id;
        //req.user lo agrega la política de privacidad
        let response = await controller.destroyAll(user_id);
        if (response) {
          return res.sendSuccess(response);
        } else {
          return res.sendNotFound("order");
        }
      } catch (error) {
        next(error);
      }
    });*/
    this.read("/all", ["PUBLIC"], async (req, res, next) => {
      try {
        //let page = req.query.page || 1;
        let response = await controller.readAll();
        if (response) {
          return res.sendSuccess(response);
        } else {
          return res.sendNotFound("orders");
        }
      } catch (error) {
        next(error);
      }
    });
    this.read("/gains", ["PUBLIC"], async (req, res, next) => {
      try {
        let user_id = "658ce641a8cde83cc41c9ef9";
        //let user_id = req.user._id; //passport-politics
        let response = await controller.getGain(user_id);
        if (response) {
          return res.sendSuccess(response);
        } else {
          return res.sendNotFound("orders");
        }
      } catch (error) {
        console.log(error);
      }
    });
  }
}
