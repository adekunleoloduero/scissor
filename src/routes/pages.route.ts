import express from 'express';

import { 
    showSignInPage,
    showSignUpPage,
    showUserDashboard,
    showShortenUrlPage
} from '../controllers/pages.controller';

import { authenticateUser } from '../middlewares/auth.middleware';



export default (router: express.Router ): void => {
    //Pages relating to Urls
    router.get('/pages/signup', showSignUpPage);
    router.get('/pages/signin', showSignInPage);
    router.get('/pages/dashboard', authenticateUser, showUserDashboard);
    router.get('/pages/shorten-url', authenticateUser, showShortenUrlPage);

}