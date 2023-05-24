import express from 'express';
import authRoute from './auth.route';
import urlsRoute from './urls.route';

const router = express.Router();



export default (): express.Router => {
    authRoute(router);
    urlsRoute(router);
    return router;
}