import { Url } from '../models/urls.model';
import shortId from 'shortid';
import { config } from '../configs';



export const shortenUrl = async (longUrl: string) => {
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