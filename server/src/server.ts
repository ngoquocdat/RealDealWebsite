import express, { Application, Router} from "express";
import bodyParser from "body-parser";
import todosRouter from "./routers/TodosRouter";
import pool from './dbconfig/dbconnector';

class Server {
    private app;

    constructor() {
        this.app = express();
        this.config();
        this.routerConfig();
        this.dbConnect();
    }

    private config() {
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(bodyParser.json({limit: '1mb'}));
    }

    private dbConnect() {
          pool.connect(function(err, client, done) {
            if(err) throw new Error(err as any);
            console.log("Connected");
          })  
    }

    private routerConfig() {
        this.app.use('/', todosRouter);
    }

    public start = (port: number ) => {
        return new Promise((resolve, reject) => {
            this.app.get('/', function (req, res) {
                return res.send("Connected to postgres db");
            })
            this.app.listen(port, () => {
                resolve(port);
            }).on('error', (err: Object) => reject(err));
        })
    }
}

export default Server