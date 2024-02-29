import jwt from 'jsonwebtoken';
import dotenv from "../ultis/dotenv";
import logger from './logger';
import express, { NextFunction, Request, Response } from "express";
import CryptoJS from 'crypto-js';
import NodeRSA from 'node-rsa';
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
const plainPassword = "Kien@6789";
const store_password = "c2619e5b82e8ae6258c0e03717fa1b6b054a146d6010899f810656dea948e522";
export const encryptPassword = () => {
    const user = { account: 'kiennpt', password: plainPassword, };
    const salt = user.account + '.' + user.password;
    // const passwordClient = CryptoJS.
    const key = new NodeRSA({b: 1024});
    const public_key = key.importKey(process.env.ACCESS_PUBLIC_KEY!);
    const private_key = key.importKey(process.env.ACCESS_PRIVATE_KEY!);

    let encryptPassword = public_key.encrypt(plainPassword, "base64");
    logger.info(encryptPassword);
    let decryptPassword = private_key.decrypt(encryptPassword, "utf8");
    logger.info(decryptPassword);

}