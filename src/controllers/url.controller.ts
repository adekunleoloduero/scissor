import express  from 'express';
import { shortenUrl } from '../services/url.service';
import * as validUrl from 'valid-url';
import { config } from '../configs';





 export const shorten = async function (req: express.Request, res: express.Response, next: express.NextFunction) {
    const { longUrl } = req.body;
    const baseUrl = config.BASE_URL

    //Validate the base url
    if (!validUrl.isUri(baseUrl)) {
        return res.status(400).json('Invalid base url or domain');
    }

    try {
        //Validate the original url
        if (validUrl.isUri(longUrl)) {
            const url = await shortenUrl(longUrl);
            return res.status(200).json(url);
        } else {
            return res.status(400).json('Invalid or broken url');
        }
    } catch(error) {
        console.log(error);
        next(error);
    }
 }


 