//CAPA DE ENRUTAMIENTO
//SE VA A ENCARGAR DE QUE LOS REQUERIMIENTOS SEAN LOS CORRECTOS
//Y VA A ELABORAR LA RESPUESTA A ENVIAR AL CLIENTE
//ES DECIR, ACA MANEJAMOS REQ Y RES
import MyRouter from "../routes/router.js";
import ToysController from "../controllers/toys.controller.js";

const toysController = new ToysController();

export default class ToysRouter extends MyRouter {
  init() {
    this.create("/", async (req, res, next) => {
      try {
        let data = req.body;
        let response = await toysController.createController(data);
        return res.sendSuccessCreate(response);
      } catch (error) {
        next(error);
      }
    });
    this.read("/", async (req, res, next) => {
      try {
        let response = await toysController.readController();
        if (response) {
          return res.sendSuccess(response);
        } else {
          return res.sendNotFound();
        }
      } catch (error) {
        next(error);
      }
    });
    this.read("/:id", async (req, res, next) => {
      try {
        let { id } = req.params
        let response = await toysController.readController(id);
        if (response) {
          return res.sendSuccess(response);
        } else {
          return res.sendNotFound();
        }
      } catch (error) {
        next(error);
      }
    });
  }
}
