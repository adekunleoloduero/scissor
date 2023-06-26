import express  from 'express';



//Auth pages controllers
export const showSignUpPage = async function (req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        res.status(200).render('signUp', {
            pageTitle: 'Signup'
        });
    } catch(error) {
        console.log(error);
        next(error);
    }
 }

export const showSignInPage = async function (req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        res.status(200).render('signIn', {
            pageTitle: 'Signin'
        });
    } catch(error) {
        console.log(error);
        next(error);
    }
 }



//Users pages controllers
export const showUserDashboard = function (req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        res.status(200).render('dashboard', {
            page: "Dashboard"
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
