import express from 'express';
import authRoute from './auth.route';
import urlsRoute from './urls.route';
// import usersRoute from './users.route';
import pagesRoute from './pages.route';

const router = express.Router();



export default (): express.Router => {
    authRoute(router);
    urlsRoute(router);
    // usersRoute(router);
    pagesRoute(router);
    
    return router;
}