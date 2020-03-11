import express, {Application} from "express";
import morgan from "morgan";
import cors from "cors";

import path from "path";

import indexRoutes from "./routes/index";

const app: Application = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());


app.use('/api', indexRoutes);
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;