import { createLogger, format, transports } from "winston";
const { simple } = format;

const levels = {
  FATAL: 1,
  ERROR: 2,
  INFO: 3,
  HTTP: 4,
};

export default createLogger({
  levels: levels,
  transports: [
    new transports.Console({
      level: "HTTP",
      format: simple(),
    }),
    new transports.File({
      filename: "./errors.log",
      level: "ERROR",
      format: simple(),
    }),
  ],
});
