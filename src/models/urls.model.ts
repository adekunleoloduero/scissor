import { Model, Schema, model } from 'mongoose';
// import bcrypt from 'bcrypt';



interface IUrl extends Document {
    longUrl: string,
    shortUrl: string
    urlCode: string,
    createdAt: Date
}
  
  // User instance method (s)
  interface IUrlMethods {
    isValidPassword(password: string): boolean;
  }
  
  // Model type for IUserMethods...
  type UrlModel = Model<IUrl, {}, IUrlMethods>;


const UrlSchema = new Schema<IUrl, UrlModel, IUrlMethods>({
    longUrl: { type: String, required: true },
    shortUrl: { type: String },
    urlCode: { type: String },
    createdAt: { type: Date, default: Date.now() }
});





export const Url = model<IUrl, UrlModel>('Url', UrlSchema);