import { faker } from "@faker-js/faker";
import AuthRepository from "../../repositories/users.rep.js";
import OrdersRepository from "../../repositories/orders.rep.js";

const user = () => {
  let mail = faker.internet.email({ provider: "coder.com" }).toLowerCase();
  let password = "hola1234";
  let role = 0;
  return { mail, password, role };
};

const types = ["caño", "accesorio", "llave de paso"];
const sizes = [ 0.2, 0.25, 0.32 ];

const order = () => {
  const ii = Math.floor(Math.random() * 3);
  const jj = Math.floor(Math.random() * 3);
  let type = types[ii];
  let size = sizes[jj];
  let quantity = 1;
  let price = faker.commerce.price({ min: 1500, max: 10000 });
  return { type, size, quantity, price };
};

const fakeData = async () => {
  try {
    let auth = new AuthRepository();
    let orderRep = new OrdersRepository();
    for (let i = 0; i < 100; i++) {
      let fakeUser = user();
      let dataUser = await auth.register(fakeUser);
      for (let j = 0; j < 5; j++) {
        let fakeOrder = order();
        fakeOrder.user_id = dataUser.response;
        await orderRep.create(fakeOrder);
        console.log(fakeOrder)
      }
    }
    console.log("done!");
  } catch (error) {
    console.log(error)
  }
};

fakeData();