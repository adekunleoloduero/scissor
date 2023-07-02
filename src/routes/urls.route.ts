import express from 'express';

import { 
    returnLongUrlController, 
    shortenUrlController,
    urlAnalyticsController,
    getUrlByIdController,
    urlsHistoryController,
    deleteUrlController
} from '../controllers/url.controller';

import { authenticateUser } from '../middlewares/auth.middleware';



export default (router: express.Router ): void => {
    //1.Strictly for request that renders ejs template

    //Redirect to original URL
    router.get('/:urlCode', returnLongUrlController);
      
    //Get URL by
    router.get('/urls/:id', authenticateUser, getUrlByIdController);

    //Url Analytics
    router.get('/urls/analytics/:urlCode/:page', authenticateUser, urlAnalyticsController);

    //URLs history
    router.get('/urls/history/:page', authenticateUser, urlsHistoryController);

    //Shorten URL
    router.post('/urls/shorten', authenticateUser, shortenUrlController);
    
    //Delete URL
    router.delete('/urls/delete/:id', authenticateUser, deleteUrlController);


    //2. Strictly requests with content types of application/json
    //Shorten URL
    router.get('/:uCode', returnLongUrlController);

    router.post('/api/urls/shorten', authenticateUser, shortenUrlController);

    //Get URL by
    router.get('/api/urls/:id', authenticateUser, getUrlByIdController);

    //URLs history
    router.get('/api/urls/history/:page', authenticateUser, urlsHistoryController);

    //Url Analytics
    router.get('/api/urls/analytics/:urlCode/:page', authenticateUser, urlAnalyticsController);
    
    //Delete URL
    router.delete('/api/urls/delete/:id', authenticateUser, deleteUrlController);
}