import { Router } from "express";
import { restaurantRouter } from "./restaurant";

const router = Router();

router.use(restaurantRouter)

export {router as appRouters}