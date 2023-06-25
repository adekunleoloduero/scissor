import express  from 'express';


import { 
    shortenUrlService,
    returnLongUrlService,
    urlsHistoryService,
    getUrlByIdService
} from '../services/url.service';

import * as validUrl from 'valid-url';
import { config } from '../configs';
import * as requestIp from 'request-ip';


export const shortenUrlController = async function (req: express.Request, res: express.Response, next: express.NextFunction) {
    const { longUrl } = req.body;
    let baseUrl;
    if (req.body.customDomain) {
        baseUrl = req.body.customDomain;
    } else {
        baseUrl = config.BASE_URL;
    }
   
    const userId = req.user.id;

    //Validate the base url
    if (!validUrl.isUri(baseUrl)) {
        return res.status(400).json('Invalid base url or domain');
    }

    try {
        //Validate the original url before proceeding
        if (validUrl.isUri(longUrl)) {
            const url = await shortenUrlService(req.body, userId, baseUrl);
            return res.status(200).json(url);
        } else {
            return res.status(400).json('Invalid or broken url');
        }
    } catch(error) {
        console.log(error);
        next(error);
    }
 }



//Return long url in place  of short url
 export const returnLongUrlController = async function (req: express.Request, res: express.Response, next: express.NextFunction) {
    const { urlCode } = req.params;
    const clientIp = requestIp.getClientIp(req) as string;
    try {
        const url = await returnLongUrlService(urlCode, clientIp);
        const shortUrl = url?.shortUrl || '/';
        return res.status(300).json({ longUrl: url?.longUrl })
        .redirect(shortUrl);
    } catch(error) {
        console.log(error);
        next(error);
    }
 }

//Get url by urlCode
 export const getUrlByIdController = async function (req: express.Request, res: express.Response, next: express.NextFunction) {
    const id = req.params.id;
    try {
        const url = await getUrlByIdService(id);
        return res.status(200).json(url);
    } catch(error) {
        console.log(error);
        next(error);
    }
 }


export const urlsHistoryController = async function (req: express.Request, res: express.Response, next: express.NextFunction) {
    const userId = req.user.id as string;
    const page = req.query.page as string;
    const limit = req.query.limit as string;
    
    try {
        const urls = await urlsHistoryService(userId, page, limit);
        return res.status(200).json(urls);
    } catch(error) {
        console.log(error);
        next(error);
    }
 }


//  export const urlsAnalyticsController = async function (req: express.Request, res: express.Response, next: express.NextFunction) {
//     const page = req.query.page as string;
//     const limit = req.query.limit as string;
//     try {
//         const userId = req.user.id;
//         const urls = await urlsAnalyticsService(userId, page, limit);
//         return res.status(200).json(urls);
//     } catch(error) {
//         console.log(error);
//         next(error);
//     }
//  }


