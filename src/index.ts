import express, { json, Request, Response } from "express";
import cors from "cors";

const server = express()

server.use(json())
server.use(cors())

server.get("/health", (req: Request, res: Response) => {
    res.send("Ok")
})

server.listen(4000, () => {
    console.log(`Connected to port 4000`)
})