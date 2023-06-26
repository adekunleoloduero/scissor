import express, { ErrorRequestHandler } from 'express';
import * as jwt from 'jsonwebtoken';
import { config } from '../configs';



export const authenticateUser = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const token = req.cookies.access_token;
    if (token) {
        jwt.verify(token, config.JWT_SECRET, (error: any, authData: any) => {
            if (error) {
                console.log(error);
                if (req.header("Content-type") == "application/json") {
                    return res.status(403).json("Invalid or expired cookie");
                } else {
                    return res.status(403).render('signin', {
                        page: 'signin',
                        message: 'Your session has expired'
                    })
                }
            }
            req.user = authData;
            next();
        });
    } else {
        if (req.header("Content-type") == "application/json") {
            return res.status(401).json("Un-authenticated");
        } else {
            res.status(401).render('signin', {
                page: "signin"
            })
        }
    }
}