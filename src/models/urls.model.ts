import { Document, Schema, model } from 'mongoose';


interface IUrl extends Document {
  userId: string | undefined,
  longUrl: string,
  description: string,
  shortUrl: string
  urlCode: string,
  customDomain: string,
  qrCode: string,
  createdAt: Date,
}
  

const UrlSchema = new Schema<IUrl>({
    userId: { type: Schema.Types.ObjectId, ref: 'users' },
    longUrl: { type: String, required: true },
    description: { type: String, required: true },
    shortUrl: { type: String },
    urlCode: { type: String },
    customDomain: { type: String },
    qrCode: { type: String},
    createdAt: { type: Date, default: Date.now() }
});




export const Url = model<IUrl>('urls', UrlSchema);