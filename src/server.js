import app from "./app.js";
import program from "./config/arguments.js";
import cluster from "cluster";
import { cpus } from "os";

const port = program.p;
const environment = program.mode;

const PORT = process.env.PORT || port;
const ready = () => {
  console.log("mode:" + environment);
  console.log('worker id:', process.pid)
  console.log("server ready on port " + PORT);
};

const procs = cpus().length
//console.log(cluster.isPrimary)
//console.log(process.pid)

if(cluster.isPrimary){
  for (let p=1; p<=procs; p++){
    cluster.fork()
  }
} else {
  app.listen(PORT, ready);
}
