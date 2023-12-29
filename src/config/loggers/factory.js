import args from "../arguments.js";
import loggerDev from "../loggers/loggerDev.js";
import loggerProd from "../loggers/loggerProd.js";

let loggers = null;

switch (args.persistence) {
  case "MEMORY":
    loggers = loggerDev;
    break;
  case "FS":
    loggers = loggerDev;
    break;
  default: //"MONGO"
    loggers = loggerProd;
    break;
}

export default loggers;
