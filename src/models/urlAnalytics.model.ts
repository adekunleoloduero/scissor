import { Document, Model, Schema, model } from 'mongoose';


interface IUrlAnalytics extends Document {
    urlCode: string,
    ip: string,
    clickCount: number,
    locationInfo: Record<string, any>
}
  

const UrlAnalyticsSchema = new Schema<IUrlAnalytics>({
    urlCode: { type: String, required: true},
    ip: { type: String, required: true},
    clickCount: { type: Number, default: 0 },
    locationInfo: {type: Object }
});




export const UrlAnalytics = model<IUrlAnalytics>('urlAnalytics', UrlAnalyticsSchema );