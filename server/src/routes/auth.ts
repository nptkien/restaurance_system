import express, { Request, Response } from "express";
import asyncHandler from '../ultis/async_handler';
import { createNewAccessToken, verifyAccessToken } from "../ultis/auth";
import logger from "../ultis/logger";
const authRouter = express.Router();
authRouter.get('/xxxx', asyncHandler(async (req: Request, res: Response) => {
    res.json({
        'server': "done"
    });
}));

authRouter.post('/login', asyncHandler(async (req: Request, res: Response) => {
    const { account, password }: { account: string, password: string } = req.body;
    // authenticate -- cu gia su nhu login ok

    // authoration --- tao token
    logger.info({ account, password });
    const accessToken = createNewAccessToken({ payload: { account, password } })
    res.json({
        'server': accessToken
    });
}));

authRouter.post('/verify', verifyAccessToken, asyncHandler(async (req: Request, res: Response) => {
    const { account, password }: { account: string, password: string } = req.body;
    // authenticate -- cu gia su nhu login ok

    // authoration --- tao token
    logger.info({ account, password });
    res.json({
        'server': ""
    });
}));
export { authRouter }
