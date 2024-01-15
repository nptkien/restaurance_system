import express, { Request, Response } from "express";
import asyncHandler from '../ultis/async_handler';
const restaurantRouter = express.Router();

restaurantRouter.get('/xxxx', asyncHandler(async (req: Request, res: Response) => {
    res.json({
        'server': "done"
    });
}));

restaurantRouter.post('/abc', asyncHandler(async (req: Request, res: Response) => {
    res.json({
        'server': "done"
    });
}));
export { restaurantRouter }


