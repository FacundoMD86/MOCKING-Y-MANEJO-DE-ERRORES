import loggers from "../config/loggers/factory.js";

const notFoundHandler = (req, res, next) => {
  req.logger = loggers;
  loggers.ERROR(
    `${req.method} ${
      req.url
    } - ${new Date().toLocaleTimeString()} - not found path`
  );
  return res.status(404).json({
    method: req.method,
    path: req.url,
    message: "not found",
  });
};

export default notFoundHandler;

/*import loggers from "../config/loggers/factory.js";

const notFoundHandler = (req, res, next) => {
  req.logger = loggers;
  req.logger.ERROR(
    `${req.method} ${
      req.url
    } - ${new Date().toLocaleTimeString()} - not found path`
  );
  return res.status(404).json({
    method: req.method,
    path: req.url,
    message: "not found",
  });
};

export default notFoundHandler;*/
