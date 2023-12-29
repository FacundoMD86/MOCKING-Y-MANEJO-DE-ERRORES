import args from "../config/arguments.js"; //para traerme la persistencia
import MongoConnect from "../config/Mongo.js"; //para tarerme la conexion de Mongo
import config from "../config/config.js"; //para traerme las variables de entorno
import OrderMongo from "./mongo/orders.mongo.js";

let dao = {}; //objeto donde voy a tener los diferentes modelos SEGUN la persistencia elegida al iniciar el servidor

switch (args.persistence) {
  case "MEMORY":
    console.log("memory: connected");
    const { default: ToyMemory } = await import("./memory/toys.mem.js");
    const { default: CartMemory } = await import("../dao/memory/carts.mem.js");
    const { default: UserMemory } = await import("./memory/users.mem.js");
    dao = { Toy: ToyMemory, Cart: CartMemory, User: UserMemory };
    break;
  case "FS":
    console.log("file system: connected");
    const { default: ToyFs } = await import("../dao/fs/toys.fs.js");
    const { default: CartFs } = await import("../dao/fs/carts.fs.js");
    const { default: UserFs } = await import("../dao/fs/users.fs.js");
    dao = { Toy: ToyFs, Cart: CartFs, User: UserFs };
    break;
  default: //"MONGO"
    const mongo = new MongoConnect(config.LINK_DB);
    mongo.connect_mongo();
    const { default: ToyMongo } = await import("../dao/mongo/toys.mongo.js");
    const { default: CartMongo } = await import("../dao/mongo/carts.mongo.js");
    const { default: UserMongo } = await import("../dao/mongo/users.mongo.js");
    dao = { Order: OrderMongo, Toy: ToyMongo, Cart: CartMongo, User: UserMongo };
    break;
}

export default dao;
