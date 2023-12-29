import MyRouter from "./router.js";
import ToysRouter from "./toys.router.js";
import CartsRouter from "./carts.router.js";
import AuthRouter from "./auth.js";
import ProductsRouter from "./products.router.js";
import OrdersRouter from "./order.router.js";
import transporter from "../config/transporter.js";
import config from "../config/config.js";
import __dirname from "../utils.js";
import FakeRouter from "./orders.fake.router.js";

const auth = new AuthRouter();
const products = new ProductsRouter();
const toys = new ToysRouter();
const carts = new CartsRouter();
const orders = new OrdersRouter();
const fake = new FakeRouter();
const { G_MAIL } = config;

export default class indexRouter extends MyRouter {
  init() {
    this.read("/", ["PUBLIC"], (req, res) =>
      res.status(200).send("Almagro AGR")
    );
    this.create("/mail", ["PUBLIC"], async (req, res, next) => {
      try {
        let to = req.body.to;
        let subject = "CORREO DE PRUEBA";
        let html = (product) => `
          <h1>TITULO DE PRUEBA</H1>
          <P>parrafo de prueba</P>
          <img src= "cid:foto_logo" />
          ${product.name} - ${product.price}
        `;
        await transporter.sendMail({
          from: G_MAIL,
          to,
          subject,
          html: html({ name: "CODO", price: "1500" }),
          attachments: [{
            filename:'logo.webp', path: __dirname+'/public/img/logo.webp', cid:'foto_logo'
          }]
        });
        return res.status(200).json({response: 'sent'})
      } catch (error) {
        next(error);
      }
    });
    this.use("/auth", ["PUBLIC"], auth.getRouter());
    this.use("/toys", ["PUBLIC"], toys.getRouter());
    this.use("/products", ["PUBLIC"], products.getRouter());
    this.use("/carts", ["PUBLIC"], carts.getRouter());
    this.use("/orders", ["PUBLIC"], orders.getRouter());
    this.use("/fake", ["PUBLIC"], fake.getRouter());
    this.use("/simple", ["PUBLIC"], (req, res) => {
      //console.log("Req:", req);
      //console.log("Res:", res);
      let total = 1;
      for (let i = 1; i < 100; i++) {
        total = i * i;
      }
      return res.status(200).send({ total });
    });
    this.use("/complex",["PUBLIC"], (req, res) => {
      //console.log("Req:", req);
      //console.log("Res:", res);
      let total = 1;
      for (let i = 1; i < 10000000; i++) {
        total = (i++) * i;
      }
      return  res.status(200).send({ total });
    });
    
  }
}
