import express from 'express';
import cookieParser from 'cookie-parser';
import routes from './routes';
import cors from 'cors';

const app = express();

//Configure cors
app.use(cors())


//Parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());




//Routes
app.use('/', routes());


//Error handler
const errorHandler: express.ErrorRequestHandler = (error, req, res, next) => {
    if (error.status == 404) {
        next()
    }
    console.log(error);
    return res.status(500).json("Internal Server Error");
}
app.use(errorHandler);

app.get('*', (req: express.Request, res: express.Response) => {
    return res.status(404).json("Not Found");
})


export default app;
