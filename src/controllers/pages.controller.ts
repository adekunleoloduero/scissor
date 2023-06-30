import express  from 'express';
import { User } from '../models/users.model';
import { Url } from '../models/urls.model';



//Auth pages controllers
export const showSignUpPage = async function (req: express.Request, res: express.Response, next: express.NextFunction) {
    const authenticated = req.user;
    try {
        if (authenticated) {
            return res.redirect('/pages/dashboard');
        } else {
            res.status(200).render('signUp', {
                pageTitle: 'Signup'
            });
        }
    } catch(error) {
        console.log(error);
        next(error);
    }
 }

export const showSignInPage = async function (req: express.Request, res: express.Response, next: express.NextFunction) {
    const authenticated = req.user;
    try {
        if (authenticated) {
            return res.redirect('/pages/dashboard');
        } else {
            res.status(200).render('signIn', {
                pageTitle: 'Signin'
            });
        }
    } catch(error) {
        console.log(error);
        next(error);
    }
 }



//Users pages controllers
export const showUserDashboard = async function (req: express.Request, res: express.Response, next: express.NextFunction) {
    const id = req.user.id;
    try {
        const user = await User.findById(id);

        //Get total number of URLs created by the user
        const urlsCount = await Url.count({ userId: id });
        res.status(200).render('dashboard', {
            pageTitle: "Dashboard",
            user,
            urlsCount
        });
    } catch(error) {
        console.log(error);
        next(error);
    }
 }



 //Url pages controllers
export const showShortenUrlPage = async function (req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
       return res.status(200).render('shortenUrl');
    } catch(error) {
        console.log(error);
        next(error);
    }
 }
