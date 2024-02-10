import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import { AppDataSource } from './DB/src/data-source';
import "reflect-metadata"
import cookieParser from "cookie-parser";
import { router as usersRoute } from "./routes/users";
import { router as dataRoute } from "./routes/data";
import { checkUser } from './middlewares/authMiddleware';

dotenv.config();

const app: Application = express();
app.use(cors({credentials: true, origin: 'http://localhost:3000', methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', allowedHeaders: 'Content-Type,Authorization'}));
app.use(express.json());
app.use(cookieParser());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});
app.use("/users", usersRoute);
app.use("/data", checkUser, dataRoute);

AppDataSource.initialize().then(async () => {
  console.log("Successfully connected to DB")
}).catch((error) => console.log(error))

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});