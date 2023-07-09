import express from 'express';

import { 
    returnLongUrlController, 
    shortenUrlController,
    urlAnalyticsController,
    getUrlByIdController,
    urlsHistoryController,
} from '../controllers/url.controller';

import { authenticateUser } from '../middlewares/auth.middleware';



export default (router: express.Router ): void => {
    //Shorten URL
    router.post('/api/urls/shorten', authenticateUser, shortenUrlController);

    //Redirect to original URL
    router.get('/:urlCode', returnLongUrlController);
      
    //Get URL by
    router.get('/api/urls/view/:id', authenticateUser, getUrlByIdController);

    //Url Analytics
    router.get('/api/urls/analytics/:urlCode/:page/:pageStatus', authenticateUser, urlAnalyticsController);

    //URLs history
    router.get('/api/urls/history/:page/:pageStatus', authenticateUser, urlsHistoryController);
}