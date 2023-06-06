import express, { ErrorRequestHandler } from 'express';
import * as jwt from 'jsonwebtoken';
import { config } from '../configs';



export const authenticateUser = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const token = req.cookies.access_token;
    if (token) {
        jwt.verify(token, config.JWT_SECRET, (error: any, data: any) => {
            if (error) {
                console.log(error);
                return res.status(403).json("Invalid or expired cookie");
            }
            req.push(data);
            next();
        });
    } else {
        return res.status(401).json("Un-authenticated");
    }
}