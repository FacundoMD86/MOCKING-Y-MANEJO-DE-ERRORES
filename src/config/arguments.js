import { Command } from "commander";

const program = new Command();

program
  .option("-p <port>", "port", 8080)
  .option("--persistence <persistence>", "persistence", "MONGO")
  .option("--mode <mode>", "mode", "dev");

program.parse();

export default program.opts(); //exporta el objeto con los comandos escritos

//node ./src/server.js -p 8000 --mode production
//{ p:"8080" , mode: "production" }
