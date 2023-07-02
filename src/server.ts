import express from 'express';
import cookieParser from 'cookie-parser';
import routes from './routes';
import cors from 'cors';
import ejs from 'ejs';
import swaggerUi from 'swagger-ui-express';
import { apiDocumentation } from '../docs/index';


const app = express();

//Configure cors
app.use(cors());

//Configure swagger-ui
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDocumentation));


app.set('trust proxy', true);


//Parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());


//Configure view
app.set('view engine', 'ejs');
app.set('views', 'views');


//Configure static files
app.use(express.static('public'));


//Routes
app.use('/', routes());


app.get('/', async (req, res, next) => {
    res.status(200)
    .render('home', {
        page: 'home'
    });
})


//Error handler
const errorHandler: express.ErrorRequestHandler = (error, req, res, next) => {
    if (error.status == 404) {
        next()
    }
    console.log(error);
    if (req.header('Content-type') == 'application/json') {
        return res.status(500).json("Internal Server Error");
    } else {
        return res.status(500).render('serverError', {
            pageTitle: 'Server Error'
        })
    }
}
app.use(errorHandler);

app.get('*', (req: express.Request, res: express.Response) => {
    if (req.header('Content-type') == 'application/json') {
        return res.status(404).json("Not Found");
    } else {
        return res.status(404).render('notFound', {
            pageTitle: 'Not Found'
        })
    }

})


export default app;
