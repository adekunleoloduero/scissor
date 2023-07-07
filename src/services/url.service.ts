import { Url } from '../models/urls.model';
import { UrlAnalytics } from '../models/urlAnalytics.model';
import shortId from 'shortid';
import * as QRCode from 'qrcode';
import { config } from '../configs';
import { SuperfaceClient } from "@superfaceai/one-sdk";


const sdk = new SuperfaceClient();


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

 
export const returnLongUrlService = async (urlCode: string, ip: string) => {
    const url = await Url.findOne({ urlCode });

    //Update url analytics
    let analytics = await UrlAnalytics.findOne({ urlCode, ip });
    if (analytics) {
        analytics.clickCount = analytics.clickCount + 1;
        await analytics.save();
    } else {
        const profile = await sdk.getProfile("address/ip-geolocation@1.0.1");
        const result = await profile.getUseCase("IpGeolocation").perform(
        {
            ipAddress: ip
        },
        {
            provider: "ipdata",
            security: {
                    apikey: {
                    apikey: config.IP_DATA_API_KEY
                }
            }
        }
        );
        
        const data = result.unwrap();
        let analytics = new UrlAnalytics({
            urlCode,
            ip,
            clickCount: 1,
            locationInfo: data
        });
        await analytics.save();
    }
    return url;
 }


 export const getUrlByIdService = async (id: string) => {
    const url = await Url.findById(id);
    return url;
 }


export const urlsHistoryService = async (userId: string, page: string, pageStatus: string) => {
    let previousPage = 0;
    let nextPage = 0;
    const pageValue = parseInt(page);
    if (pageStatus == 'next') {
        previousPage = pageValue;
        nextPage = pageValue + 1;
    } else if (pageStatus == 'prev') {
        if (pageValue === 1) {
            previousPage = pageValue;    
        } else {
            previousPage = pageValue - 1;
        }
        nextPage = pageValue + 1;
    }

    //Prevent page value from exceeding the total possible pages
    const count = await Url.count({ userId });
    const totalPages = Math.ceil(count / 5);
    if (totalPages === pageValue) {
        nextPage = pageValue;
        if (pageValue === 1) {
            previousPage = 1;
        } else {
            previousPage = pageValue - 1;
        }
    }

    const urls = await Url.find({ userId })
    .sort({ createdAt: -1 })
    .limit(5)
    .skip((pageValue - 1) * 5)
    .exec();
    return {
        urls,
        previousPage,
        nextPage,
    };
 }


 export const urlAnalyticsService = async (urlCode: string, page: string, pageStatus: string) => {
    let previousPage = 0;
    let nextPage = 0;
    const pageValue = parseInt(page);
    if (pageStatus == 'next') {
        previousPage = pageValue;
        nextPage = pageValue + 1;
    } else if (pageStatus == 'prev') {
        if (pageValue === 1) {
            previousPage = 1;
        } else {
            previousPage = pageValue - 1;
        }
    }

    //Prevent page value from exceeding the total possible pages
    const count = await Url.count({ urlCode });
    const totalPages = Math.ceil(count / 10);
    if (totalPages === pageValue) {
        nextPage = pageValue;
        if (pageValue === 1) {
            previousPage = 1;
        } else {
            previousPage = pageValue - 1;
        }
    }
    
    const analytics = await UrlAnalytics.find({ urlCode })
    .sort({ clickCount: -1 })
    .limit(10)
    .skip((pageValue - 1) * 10)
    .exec();

    //Get short UrL
    const url = await Url.findOne({ urlCode });
    let shortUrl;

    if (!url) {
        shortUrl = ''
    } else {
        shortUrl = url.shortUrl
    }
    return {
        analytics,
        shortUrl,
        previousPage,
        nextPage,
    };
 }



// export const deleteUrlService = async (id: string) => {
//     const url = await Url.findByIdAndDelete(id)
//     return url;
//  }
 
 