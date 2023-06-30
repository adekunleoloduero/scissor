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
}