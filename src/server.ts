import express, { Response } from "express";
import cors from "cors";
import routes from "./routes";

const server = express();

server.use(cors());
server.use(express.json());

server.get("/", (_, res: Response) => {
  res.send({ messge: "Olá, Dev!" });
});

server.use("/api", routes);

export default server;
