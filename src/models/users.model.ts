import { Schema, model } from 'mongoose';


const UserSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});


export const userModel = model('User', UserSchema);