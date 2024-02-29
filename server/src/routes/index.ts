import { Router } from "express";
import { restaurantRouter } from "./restaurant";
import { brandRouter } from "./brand";
import { productRouter } from "./product";
import { authRouter } from "./auth";
const router = Router();

router.use(restaurantRouter)
router.use(brandRouter)
router.use(productRouter)
router.use(authRouter)

export { router as appRouters }