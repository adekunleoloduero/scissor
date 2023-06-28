import express from 'express';

import { 
    returnLongUrlController, 
    shortenUrlController,
    // urlsAnalyticsController,
    getUrlByIdController,
    urlsHistoryController,
    // viewUrlController,
    deleteUrlController
} from '../controllers/url.controller';

import { authenticateUser } from '../middlewares/auth.middleware';



export default (router: express.Router ): void => {
    //Redirect to original URL
    router.get('/:urlCode', returnLongUrlController);

    //View URL
    // router.get('/urls/view/:id', authenticateUser, viewUrlController);
    // router.get('/urls/analytics/:id', authenticateUser, urlsAnalyticsController);
    
    // //Get URL by
    router.get('/urls/:id', authenticateUser, getUrlByIdController);

    //URLs history
    router.get('/urls/history/:page', authenticateUser, urlsHistoryController);

    //Shorten URL
    router.post('/urls/shorten', authenticateUser, shortenUrlController);
    
    //Delete URL
    router.post('/urls/delete/:id', authenticateUser, deleteUrlController);
}