import express from 'express';

import { 
    returnLongUrlController, 
    shortenUrlController,
    // urlsAnalyticsController,
    getUrlByIdController,
    urlsHistoryController
} from '../controllers/url.controller';

import { authenticateUser } from '../middlewares/auth.middleware';



export default (router: express.Router ): void => {
    router.get('/:urlCode', returnLongUrlController);
    // router.get('/urls/analytics', authenticateUser, urlsAnalyticsController);
    router.get('/urls/:id', authenticateUser, getUrlByIdController);
    router.get('/urls/history', authenticateUser, urlsHistoryController);
    router.post('/shorten', authenticateUser, shortenUrlController);
}