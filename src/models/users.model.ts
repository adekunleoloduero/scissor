import { Model, Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';



interface IUser extends Document {
    email: string,
    password: string,
    _doc: any
}
  
  // User instance method (s)
  interface IUserMethods {
    isValidPassword(password: string): boolean;
  }
  
  // Model type for IUserMethods
  type UserModel = Model<IUser, {}, IUserMethods>;


const UserSchema = new Schema<IUser, UserModel, IUserMethods>({
    email: { type: String, required: true },
    password: { type: String, required: true }
});



UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});


UserSchema.method('isValidPassword', async function isValidPassword(password) {
    const result: boolean = await bcrypt.compare(password, this.password);
    return result;
});
    


export const User = model<IUser, UserModel>('users', UserSchema);