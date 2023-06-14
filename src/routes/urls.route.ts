import express from 'express';

import { 
    shortUrlController, 
    returnLongUrlController, 
    customShortUrlController,
    urlsAnalyticsController,
    urlsHistoryController
} from '../controllers/url.controller';

import { authenticateUser } from '../middlewares/auth.middleware';



export default (router: express.Router ): void => {
    router.get('/urls', shortUrlController);
    router.get('/:urlCode', returnLongUrlController);
    router.get('/urls/analytics', authenticateUser, urlsAnalyticsController);
    router.get('/urls/history', authenticateUser, urlsHistoryController);
    router.post('/urls/customize', authenticateUser, customShortUrlController);
    
}