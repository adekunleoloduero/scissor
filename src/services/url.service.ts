import { Url } from '../models/urls.model';
import shortId from 'shortid';
import * as QRCode from 'qrcode';
import { config } from '../configs';



export const shortenUrlService = async (body: Record<string, any>, userId: string, baseUrl: string) => {
    let url = await Url.findOne({ longUrl: body.longUrl, userId });
    if (url) {
        return url;
    } else {
        let qrCode;
        const urlCode = shortId.generate();
        const shortUrl = `${baseUrl}/${urlCode}`;
        try {
            qrCode = await QRCode.toDataURL(shortUrl);
        } catch(error) {
            console.log(error);
        }
        const data = {
            userId,
            longUrl: body.longUrl,
            description: body.description,
            shortUrl,
            urlCode,
            qrCode
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


 export const getUrlByIdService = async (id: string) => {
    const url = await Url.findById(id);
    return url;
 }


export const urlsHistoryService = async (userId: string, page: string) => {

    let pageValue;
    const count = await Url.count({ userId });
    const totalPages = Math.ceil(count / 5);

    if (parseInt(page) >= totalPages) {
        pageValue === totalPages;
    }

    //Prevent the possiblity of accessing page zero
    if (parseInt(page) < 1) {
        pageValue = 1
    } else {
        pageValue = parseInt(page);
    }
    // const limitValue = parseInt(limit);


    const urls = await Url.find({ userId })
    .sort({ createdAt: -1 })
    .limit(5)
    .skip((pageValue - 1) * 5)
    .exec();

    
    return {
        urls,
        currentPage: pageValue
    };
 }


export const deleteUrlService = async (id: string) => {
    const url = await Url.findByIdAndDelete(id)
    return url;
 }
 
 