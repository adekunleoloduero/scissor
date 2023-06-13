import express  from 'express';

import { 
    shortUrlService,
    returnLongUrlService,
    customShortUrlService,
    urlsAnalyticsService 
} from '../services/url.service';

import * as validUrl from 'valid-url';
import { config } from '../configs';
import * as requestIp from 'request-ip';



export const shortUrlController = async function (req: express.Request, res: express.Response, next: express.NextFunction) {
    const { longUrl } = req.body;
    const baseUrl = config.BASE_URL

    //Validate the base url
    if (!validUrl.isUri(baseUrl)) {
        return res.status(400).json('Invalid base url or domain');
    }

    try {
        //Validate the original url before proceeding
        if (validUrl.isUri(longUrl)) {
            const url = await shortUrlService(longUrl);
            return res.status(200).json({ shortUrl: url.shortUrl });
        } else {
            return res.status(400).json('Invalid or broken url');
        }
    } catch(error) {
        console.log(error);
        next(error);
    }
 }


 export const customShortUrlController = async function (req: express.Request, res: express.Response, next: express.NextFunction) {
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
            const url = await customShortUrlService(req.body, userId, baseUrl);
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
        return res.status(200).json({ longUrl: url?.longUrl });
    } catch(error) {
        console.log(error);
        next(error);
    }
 }


 export const urlsAnalyticsController = async function (req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        const userId = req.user.id;
        const urls = await urlsAnalyticsService(userId);
        return res.status(200).json(urls);
    } catch(error) {
        console.log(error);
        next(error);
    }
 }


//Create normal shortened url
// export const getShortenedUrlController = async function (req: express.Request, res: express.Response, next: express.NextFunction) {
//     const { longUrl } = req.body;
//     const baseUrl = config.BASE_URL

//     //Validate the base url
//     if (!validUrl.isUri(baseUrl)) {
//         return res.status(400).json('Invalid base url or domain');
//     }

//     try {
//         //Validate the original url
//         if (validUrl.isUri(longUrl)) {
//             let url = await getUrlByLongUrService(longUrl);
//             if (url) { 
//                 //Return the shortUrl if given url is already in the DB
//                 return res.status(200).json({shortUrl: url.shortUrl});
//             } else {
//                 //Create the url if it's not in the DB then return the shortUrl 
//                 url = await createShortUrlService(longUrl);
//                 return res.status(200).json({shortUrl: url.shortUrl});
//             }
//         } else {
//             return res.status(400).json('Invalid or broken url');
//         }
//     } catch(error) {
//         console.log(error);
//         next(error);
//     }
//  } 


// //Create custom shortened url
// export const createCustomShortUrlController = async function (req: express.Request, res: express.Response, next: express.NextFunction) {
//     const { longUrl } = req.body;
//     const baseUrl = config.BASE_URL

//     //Validate the base url
//     if (!validUrl.isUri(baseUrl)) {
//         return res.status(400).json('Invalid base url or domain');
//     }

//     try {
//         //Validate the original url
//         if (validUrl.isUri(longUrl)) {
//             const url = await createShortUrlService(longUrl);
//             return res.status(200).json(url);
//         } else {
//             return res.status(400).json('Invalid or broken url');
//         }
//     } catch(error) {
//         console.log(error);
//         next(error);
//     }
//  } 


 