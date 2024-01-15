import { Router } from "express";
import { restaurantRouter } from "./restaurant";
import { brandRouter } from "./brand";
import { productRouter } from "./product";

const router = Router();

router.use(restaurantRouter)
router.use(brandRouter)
router.use(productRouter)

export { router as appRouters }