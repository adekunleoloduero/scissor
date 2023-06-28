import express  from 'express';
import { User } from '../models/users.model'; 
import { Url } from '../models/urls.model';
import { config } from '../configs/index';
import * as jwt from 'jsonwebtoken';




 export const signUp = async function (req: express.Request, res: express.Response, next: express.NextFunction) {
    const { email } = req.body;

    try {
        //Check if user is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            if (req.header("Content-type") == "application/json") {
                return res.status(403).json('This email is already registered.');
            } else {
                return res.status(403).render('signUp', {
                    pageTitle: 'Signup',
                    message: 'This email is already registered.'
                });
            }
        }
        const user = await User.create(req.body);
        const { password, ...others } = user._doc;
        const token: string = jwt.sign({id: user._id, email: user.email }, config.JWT_SECRET);

        if (req.header("Content-type") == "application/json") {
            return res.status(201)
                .cookie('access_token', token, {
                httpOnly: true,
                expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
            }).json({ user, token });
        } else {
            return res.status(201)
                .cookie('access_token', token, {
                httpOnly: true,
                expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
            }).render('dashboard', {
                pagetTitle: 'Dashboard',
                user,
                urlsCount: 0
            });
        }
    } catch(error) {
        console.log(error);
        next(error);
    }
 }


 export const signIn = async function (req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            if (req.header("Content-type") == "application/json") {
                return res.status(400).json("Invalid email");
            } else {
                return res.status(400).render('signIn', {
                    pageTitle: 'Signin',
                    message: 'Invalid email'
                });
            }
        }

        //Ckeck password correctness
        const validPassword = await user.isValidPassword(req.body.password);
        if (!validPassword) {
            if (req.header("Content-type") == "application/json") {
                return res.status(400).json("Invalid password");
            } else {
                return res.status(400).render('signUp', {
                    pageTitle: 'Signup',
                    message: 'Invalid password'
                });
            }
        }

        //Get total number of URLs created by the user
        const urlsCount = await Url.count({ userId: user._id });

        const { password, ...others } = user._doc;
        const token: string = jwt.sign({id: user._id, email: user.email }, config.JWT_SECRET);

        if (req.header("Content-type") == "application/json") {
            return res.status(201)
                .cookie('access_token', token, {
                httpOnly: true,
                // expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
            }).json({ user, token });
        } else {
            return res.status(201)
                .cookie('access_token', token, {
                httpOnly: true,
                // expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
            }).render('dashboard', {
                pagetTitle: 'Dashboard',
                user,
                urlsCount
            });
        }
    } catch(error) {
        console.log(error);
        next(error)
    }  
 }

 export const logOut = async function (req: express.Request, res: express.Response, next: express.NextFunction) {
    return res.clearCookie('access_token')
    .status(200)
    .redirect('/');
    //Return the home page
 }