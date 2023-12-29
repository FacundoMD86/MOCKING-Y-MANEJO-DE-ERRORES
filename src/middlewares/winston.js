import loggerDev from "../config/loggers/loggerDev.js";

export default (req, res, next) => {
  req.logger = loggerDev;
  req.logger.HTTP(
    `${req.method} ${req.url} - ${new Date().toLocaleTimeString()}`
  );
  return next();
};
