import { Url } from '../models/urls.model';
import shortId from 'shortid';
import { config } from '../configs';



export const shortUrlService = async (longUrl: string) => {
    let url = await Url.findOne({ longUrl });
    if (url) {
        return url;
    } else {
        const urlCode = shortId.generate();
        const baseUrl = config.BASE_URL;
        const shortUrl = `${baseUrl}/${urlCode}`;
        url = new Url({
            longUrl,
            shortUrl,
            urlCode
        });
        return await url.save();
    }
 }


 export const customShortUrlService = async (longUrl: string) => {
    let url = await Url.findOne({ longUrl });
    if (url) {
        return url;
    } else {
        const urlCode = shortId.generate();
        const baseUrl = config.BASE_URL;
        const shortUrl = `${baseUrl}/${urlCode}`;
        url = new Url({
            longUrl,
            shortUrl,
            urlCode
        });
        return await url.save();
    }
 }

 
export const returnLongUrlService = async (urlCode: string, clientIp: string) => {
    const url = await Url.findOne({ urlCode });
    if (url) {
        url.storeClientIp(clientIp);
        return await url.save();    
    }
 }


 export const urlsAnalyticsService = async (mostActive: Record<string, any>) => {
    const sortBy: Record<string, any> = {}
    if (mostActive) {
        sortBy.clientIpsCount = 1
    } else {
        sortBy.clientIpsCount = -1
    }
    
    const urls = await Url.find()
    .sort(sortBy)
    .skip(5)
    .limit(5)
    .exec();
    return urls;
 }

 export const getUrlByLongUrService = async (longUrl: string) => {
    const url = await Url.findOne({ longUrl });
    return url;
 }