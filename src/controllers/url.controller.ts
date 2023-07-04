import express  from 'express';
import dotenv from 'dotenv';
dotenv.config();


import { 
    shortenUrlService,
    returnLongUrlService,
    urlAnalyticsService,
    urlsHistoryService,
    getUrlByIdService,
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
        if (req.url.startsWith('/api')) {
            return res.status(400).json('Invalid domain');
        } else {
            return res.render('shortenUrl', {
                pageTitle: 'Shorten Url',
                messagge: 'Invalid domain'
            });
        }
    } 

    try {
        //Validate the original url before proceeding
        if (validUrl.isUri(longUrl)) {
            const url = await shortenUrlService(req.body, userId, baseUrl);
            if (req.url.startsWith('/api')) {
                return res.status(201).json(url);
            } else {
                return res.render('viewUrl', {
                    pageTitle: 'View Url',
                    url
                })
            }
        } else {
            if (req.url.startsWith('/api')) {
                return res.status(400).json('Invalid or broken url');
            } else {
                return res.render('shortenUrl', {
                    pageTitle: 'Shorten Url',
                    messagge: 'Invalid or broken url'
                });
            }
        }
    } catch(error) {
        console.log(error);
        next(error);
    }
 }



//Return long url in place  of short url
 export const returnLongUrlController = async function (req: express.Request, res: express.Response, next: express.NextFunction) {
    const { urlCode } = req.params;
    let ip: string = ''; 
    if (process.env.NODE_ENV == 'production') {
        ip = req.ip;
    } else if (process.env.NODE_ENV == 'development') {
        //Ip for testing
        ip = '105.123.0.0';
    }
    
    try {
        const url = await returnLongUrlService(urlCode, ip);
        const longUrl = url?.longUrl || '/';
        const origin = req.headers.referer;
        
        if (origin?.endsWith('/api-docs/')) {
            return res.status(200).json({ longUrl });
        } else {
            return res.redirect(longUrl); 
        }
    } catch(error) {
        console.log(error);
        next(error);
    }
 }

//Get url by urlCode
 export const getUrlByIdController = async function (req: express.Request, res: express.Response, next: express.NextFunction) {
    const id = req.params.id;
    try {
        const url= await getUrlByIdService(id);
        if (req.url.startsWith('/api')) {
            return res.status(200).json(url);
        } else {
            return res.status(200).render('viewUrl', {
                pageTitle: 'View Url',
                url
            })
        }
    } catch(error) {
        console.log(error);
        next(error);
    }
 }


export const urlsHistoryController = async function (req: express.Request, res: express.Response, next: express.NextFunction) {
    const userId = req.user.id as string;
    const page = req.params.page as string;
    
    try {
        const urlsHistory = await urlsHistoryService(userId, page);
        if (req.url.startsWith('/api')) {
            return res.status(200).json(urlsHistory);
        } else {
            return res.status(200).render('urlsHistory', {
                pageTitle: 'Urls History',
                urlsHistory
            })
        }
    } catch(error) {
        console.log(error);
        next(error);
    }
 }


export const urlAnalyticsController = async function (req: express.Request, res: express.Response, next: express.NextFunction) {
    const urlCode = req.params.urlCode;
    const page = req.params.page as string;
    try {
        const urlAnalytics = await urlAnalyticsService(urlCode, page);
        if (req.url.startsWith('/api')) {
            return res.status(200).json(urlAnalytics);
        } else {
            return res.render('urlAnalytics', {
                pageTitle: 'Url Analytics',
                urlAnalytics
            });
        }
    } catch(error) {
        console.log(error);
        next(error);
    }
 }


//Delete a url
// export const deleteUrlController = async function (req: express.Request, res: express.Response, next: express.NextFunction) {
//     const id = req.params.id;
//     try {
//         const url= await deleteUrlService(id);
//         if (req.url.startsWith('/api')) {
//             return res.status(200).json(url);
//         } else {
//             return res.status(200).redirect('/urls/history/1/5');
//         }
//     } catch(error) {
//         console.log(error);
//         next(error);
//     }
//  }
