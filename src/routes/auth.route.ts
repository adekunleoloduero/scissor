import express from 'express';
import { signUp, signIn, logOut } from '../controllers/auth.controller';




export default (router: express.Router ): void => {
    router.post('/auth/signup', signUp);
    router.post('/auth/signin', signIn);
    router.get('/auth/logout', logOut);
}