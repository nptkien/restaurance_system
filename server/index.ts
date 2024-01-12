import express from "express";
import http, { Server } from "http";
import dotenv from "./src/ultis/dotenv";
import logger from "./src/ultis/logger";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from 'mongoose';
import { appRouters } from "./src/routes";
dotenv.config();
const PREFIX_API = "/api";

class App {
    public app: express.Application;
    public server: Server;
    public port: string | number;
    private config() {
        const NODE_ENV = process.env.NODE_ENV || 'development';
        this.app.use(cookieParser());
        this.app.use(cors({
            origin: NODE_ENV === 'production' ? (process.env.ALLOWED_ORIGIN ? process.env.ALLOWED_ORIGIN.split(',') : true) : true,
            credentials: true,
            allowedHeaders: 'X-PINGOTHER, Content-Type, Authorization, X-Forwarded-For, x-requested-with, x-access-token',
            methods: 'GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS',
            optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
        }));
        this.app.use(express.json({ limit: "50mb" }));
        this.app.use(express.urlencoded({ extended: true, limit: "50mb" }));
    }
    constructor() {
        this.app = express();
        this.server = http.createServer(this.app);
        this.port = process.env.PORT || 3001;
        this.config();
        this.useAPI();
    }

    run() {
        connectDatabase(() => {
            this.server.listen(this.port, () => {
                logger.info(`Server is running on port ${this.port}`);
            });
            // if (!JSON.parse(process.env.SOCKET_DISABLE || 'false')) initSocket(this.server);
            mongoose.connection.on("error", (err) => {
                logger.error("MongoDB error: ", err);
            });
        });
    }

    private useAPI() {
        this.app.use(PREFIX_API, appRouters);
    }

}
export { App }






const connectDatabase = (callback: () => void) => {
    const uri = "mongodb+srv://kiennpt:Kien%406789@ksteam.h5mewxf.mongodb.net/?retryWrites=true&w=majority";

    mongoose.connect(uri, {
        dbName: "ktteam"
    }).then(() => {
        logger.info(" connect mongo done");
        callback();

    }).catch((err) => {
        logger.error(" connect mongo err ", err);
        callback();
    })

}


// function initSocket(server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>) {
//     throw new Error("Function not implemented.");
// }


