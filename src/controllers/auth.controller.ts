import express  from 'express';
import { User } from '../models/users.model'; 
import { config } from '../configs/index';
import * as jwt from 'jsonwebtoken';




 export const signUp = async function (req: express.Request, res: express.Response, next: express.NextFunction) {
    const { email } = req.body;

    try {
        //Check if user is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(403).json('This email is already registered.');
        }
        const user = await User.create(req.body);
        const { password, ...others } = user._doc;
        return res.status(201).json(others);
    } catch(error) {
        console.log(error);
        next(error);
    }
 }


 export const signIn = async function (req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json("Invalid email");
        }

        //Ckeck password correctness
        const validPassword = await user.isValidPassword(req.body.password);
        if (!validPassword) {
            return res.status(400).json("Invalid password");
        }

        const { password, ...others } = user._doc;
        const token: string = jwt.sign({id: user._id, email: user.email }, config.JWT_SECRET, { expiresIn: '1d'});
        return res.status(200)
        .cookie('access_token', token, {
            httpOnly: true,
            expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
        })
        .json({ user: others, token });
    } catch(error) {
        console.log(error);
        next(error)
    }  
 }

 export const logOut = async function (req: express.Request, res: express.Response, next: express.NextFunction) {
    return res.clearCookie('access_token')
    .status(200)
    .json("Successfully logged out");
    //Return the home page
 }