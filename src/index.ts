import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routesV1 from './routes/v1'
dotenv.config();

//Iniciamos una instancia de express
const app = express();

const corsOptions = {
    origin: '*'
}

app.use(cors(corsOptions));
app.use(express.json());
//Asociar rutas
app.use("/api/v1", routesV1);

export default app;