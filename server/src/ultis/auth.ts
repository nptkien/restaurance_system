import jwt from 'jsonwebtoken';
import dotenv from "../ultis/dotenv";
import logger from './logger';
import express, { NextFunction, Request, Response } from "express";

dotenv.config();


export const createNewAccessToken = (
    { payload }: { payload: string | Buffer | object }
) => {
    logger.debug(`process.env.ACCESS_TOKEN_SECRET! ${process.env.ACCESS_TOKEN_SECRET!}`);
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET!, {
        algorithm: "HS256",
        expiresIn: 60,
        issuer: "ISSUER-ID"
    })
}

export const verifyAccessToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];
    if (!token) {
        res.json({ status: 401 });
    } else {
        const clientToken = token.split(' ')[1];
        jwt.verify(clientToken, process.env.ACCESS_TOKEN_SECRET!, (err, data) => {
            if (err) {
                if (err.name == "TokenExpiredError") {
                    logger.error("vlllll", err.name)
                    return { payload: jwt.decode(token), expired: true };
                }
            }
        });
    }
}