import MyRouter from "../routes/router.js";
import ProductsController from "../controllers/products.controller.js";

const productsController = new ProductsController();

export default class ProductsRouter extends MyRouter {
  init() {
    this.create("/", async (req, res, next) => {
      try {
        let data = req.body;
        let response = await productsController.createController(data);
        return res.sendSuccessCreate(response);
      } catch (error) {
        next(error);
      }
    });
    this.read("/", async (req, res, next) => {
      try {
        let response = await productsController.readController();
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
        let response = await productsController.readController(id);
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

