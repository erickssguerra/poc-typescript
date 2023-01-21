import express, { Express, json, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index.js";
dotenv.config();

const server: Express = express();

server.use(json());
server.use(cors());
server.get("/health", (req: Request, res: Response) => res.send("Ok"));
server.use(router);

const port: string = process.env.PORT || "4000";
server.listen(port, () => {
  console.log(`Server running in port ${port}.`);
});
