import { Document, Model, Schema, model } from 'mongoose';


interface IUrlAnalytics extends Document {
    urlCode: string,
    ip: string,
    clickCount: number,
    locationInfo: Record<string, any>
}
  
  // User instance method (s)
//   interface IUrlAnalyticsMethods {
//     anonymous(): void;
//   }
  
  // Model type for IUrlAnalyticsMethods
//   type UrlAnalyticsModel = Model<IUrlAnalytics, {}>;


const UrlAnalyticsSchema = new Schema<IUrlAnalytics>({
    urlCode: { type: String},
    ip: { type: String},
    clickCount: { type: Number, default: 0 },
    locationInfo: {type: Object }
});


// UrlAnalyticsSchema.method('anonymous', async function anonymous() {
// });



export const UrlAnalytics = model<IUrlAnalytics>('urlAnalytics', UrlAnalyticsSchema );