import express from 'express';
import { shorten } from '../controllers/url.controller';




export default (router: express.Router ): void => {
    router.get('/shorten', shorten);
}