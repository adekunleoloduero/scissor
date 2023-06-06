import { Model, Schema, model } from 'mongoose';



interface IUrl {
  userId: string | undefined,
  longUrl: string,
  shortUrl: string
  urlCode: string,
  clientIps: string[],
  clientIpsCount: number,
  createdAt: Date,
}
  
  // User instance method (s)
  interface IUrlMethods {
    storeClientIp(clientIp: string): void;
  }
  
  // Model type for IUserMethods...
  type UrlModel = Model<IUrl, {}, IUrlMethods>;


const UrlSchema = new Schema<IUrl, UrlModel, IUrlMethods>({
    userId: { type: Schema.Types.ObjectId, ref: "User"},
    longUrl: { type: String, required: true },
    shortUrl: { type: String },
    urlCode: { type: String },
    clientIps: [
      { type: String }
    ],
    clientIpsCount: { type: Number, default: 0},
    createdAt: { type: Date, default: Date.now() }
});


UrlSchema.method('storeClientIp', async function storeClientIp(clientIp: string) {
  let ips = this.clientIps;
  ips.push(clientIp);
  //Increment ips count
  this.clientIpsCount = ips.length;
  //Store client ips
  this.clientIps = ips;
});



export const Url = model<IUrl, UrlModel>('Url', UrlSchema);