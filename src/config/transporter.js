import { createTransport } from "nodemailer";
import args from "./arguments.js";
import config from "./config.js";

const { G_MAIL, G_PASS } = config
const port = process.env.PORT || args.p;

export default createTransport({
  service: "gmail",
  port,
  auth: {
    user: G_MAIL,
    pass: G_PASS,
  },
});
