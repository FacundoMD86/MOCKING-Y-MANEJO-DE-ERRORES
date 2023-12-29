import express from "express";
import __dirname from "./utils.js";
import passport from "passport";
import cors from "cors";
import compression from "express-compression";

import inicializePassport from "./middlewares/passport.js";
import errorHandler from "./middlewares/errorHandler.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";
import winston from "./middlewares/winston.js";

import "./config/config.js";

//import { Server } from "socket.io";
import cookieParser from "cookie-parser";
import expressSession from "express-session";
import MongoStore from "connect-mongo";

import indexRouter from "./routes/index.js";

//SERVIDOR
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/html/inicio.html");
});

//const io = new Server(server);

/*const message = [];

io.on("connection", (socket) => {
  console.log(`User ${socket.id} connected`);
  //Nombre del usuario
  let userName = "";
  //Mensaje de conexion
  socket.on("userConnection", (data) => {
    userName = data.user;
    message.push({
      id: socket.id,
      info: "connection",
      name: data.user,
      message: `${data.user} conectado`,
      date: new Date().toTimeString(),
    });
    io.sockets.emit("userConnection", message);
  });
  //Mensaje enviado
  socket.on("userMessage", (data) => {
    message.push({
      id: socket.id,
      info: "message",
      name: userName,
      message: data.message,
      date: new Date().toTimeString(),
    });
    io.sockets.emit("userMessage", message);
  });
  //Mensage Usuario escribiendo
  socket.on("typing", (data) => {
    socket.broadcast.emit("typing", data);
  });
});*/

//Static
app.use("/files", express.static(`${__dirname}/files`));

//router
const router = new indexRouter();

//Middlewares
app.use(compression({ brotli: { enable: true, zlib: {} } }));
app.use(cors());
app.use(winston)
app.use(cookieParser(process.env.SECRET_COOKIE));
app.use(
  expressSession({
    store: MongoStore.create({
      //backup por si se cae el servidor
      mongoUrl: process.env.LINK_DB,
      ttl: 60 * 60 * 24 * 7,
    }),
    secret: process.env.SECRET_SESSION,
    resave: true,
    saveUninitialized: true,
  })
);
inicializePassport();
app.use(passport.initialize());
app.use(passport.session());
app.use("/", express.static(`${__dirname}/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//endpoints
app.use("/api", router.getRouter());
app.use(errorHandler);
app.use(notFoundHandler);

export default app;
