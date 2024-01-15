import express, { Request, Response } from "express";
import asyncHandler from '../ultis/async_handler';
import { BrandModel } from "../database/brand";
import { Product, ProductCategory } from "../../../models";
import { ProductCategoryModel } from "../database/product_category";
import { ProductModel } from "../database/product";
const productRouter = express.Router();

productRouter.get('/xxxx', asyncHandler(async (req: Request, res: Response) => {
    res.json({
        'server': "done"
    });
}));

productRouter.post('/fakePCate', asyncHandler(async (req: Request, res: Response) => {
    let brands = await BrandModel.find({});
    let pSave: ProductCategory[] = [];
    brands.forEach((brand) => {
        for (let index = 0; index < 15; index++) {
            let productCate = new ProductCategory({
                name: brand.name + "cate - " + `${index + 1}`,
                code: brand.code + "-" + "2024" + `${index + 1}`,
                description: `Description of brand model ${index + 1}`,
                providerId: brand._id,
                productType: `${index % 2}`,
                status: 0,
                type: 0,
                tags: brand.tag
            });
            pSave.push(productCate);
        }

    });
    await ProductCategoryModel.insertMany(pSave);
    res.json({
        'server': `done pSave ${pSave.length}`
    });
}));
productRouter.post('/fakeProduct', asyncHandler(async (req: Request, res: Response) => {
    let product_category = await ProductCategoryModel.find({});
    let products: Product[] = [];
    product_category.forEach((pCate) => {
        for (let index = 0; index < 20; index++) {
            let product: Product = new Product({
                categoryId: pCate._id,
                price: getRandomInt(1000) * 1000,
                discountPrice: getRandomInt(1000) * 100,
                description: "Description of product ",
                name: `Product of ${pCate.name} --- ${index + 1}`,
                serial: generateRandomString(12),
                video: [],
                screenShot: [],

            })
            products.push(product);
        }
    })
    await ProductModel.insertMany(products);
    res.json({
        'server': `done pSave ${products.length}`
    });
}));
function generateRandomString(length: number): string {
    return Math.random()
        .toString(36)
        //.replace(/[^a-z0-9]+/g, '') // Regex isn't necessary here
        .replace('.', '') // There's only ever one non [a-z0-9] character in this
        .toUpperCase()
        .substr(0, length);
}
const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

export { productRouter }


