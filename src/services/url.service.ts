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


 export const customShortUrlService = async (body: Record<string, any>, userId: string, baseUrl: string) => {
    let url = await Url.findOne({ longUrl: body.longUrl, userId });
    if (url) {
        return url;
    } else {
        const urlCode = shortId.generate();
        const shortUrl = `${baseUrl}/${urlCode}`;
        const data = {
            userId,
            longUrl: body.longUrl,
            shortUrl,
            urlCode
        }
        url = await Url.create(data);
        return url;
    }
 }

 
export const returnLongUrlService = async (urlCode: string, clientIp: string) => {
    const url = await Url.findOne({ urlCode });
    if (url) {
        url.storeClientIp(clientIp);
        return await url.save();    
    }
 }


 export const urlsAnalyticsService = async (userId: string) => {
    const urls = await Url.find({ userId })
    .sort({ clientIpsCount: -1 })
    .limit(5)
    .exec();
    return urls;
 }

 