import express, { Request, Response } from "express";
import asyncHandler from '../ultis/async_handler';
import { BrandModel } from "../database/brand";
import { Brand } from '../../../models'
const brandRouter = express.Router();
const PREFIX_ROUTER_BRAND = "/brand/"
brandRouter.get('/xxxx', asyncHandler(async (req: Request, res: Response) => {
    res.json({
        'server': "done"
    });
}));

brandRouter.post('/fakeData', asyncHandler(async (req: Request, res: Response) => {
    let fakeData: Brand[] = generateMoreBrands();
    await BrandModel.insertMany(fakeData);
    res.json({
        'server': "done"
    });
}));



const generateMoreBrands = (): Brand[] => {
    return [
        new Brand({
            status: 1,
            type: 1, // Công nghệ
            name: "FPT",
            code: "FPT123",
            tag: ["Công nghệ", "Dịch vụ"],
        }),
        new Brand({
            status: 1,
            type: 2, // Thực phẩm
            name: "G7 Coffee",
            code: "G7CFE",
            tag: ["Cà phê", "Thức uống"],
        }),
        new Brand({
            status: 1,
            type: 1, // Công nghệ
            name: "POCO",
            code: "POCO456",
            tag: ["Smartphone", "Electronics"],
        }),
        new Brand({
            status: 1,
            type: 2, // Thực phẩm
            name: "Phúc Long Tea",
            code: "PLTEA789",
            tag: ["Trà", "Thức uống"],
        }),
        new Brand({
            status: 1,
            type: 3, // Mỹ phẩm
            name: "Maybelline",
            code: "MBL789",
            tag: ["Mỹ phẩm", "Làm đẹp"],
        }),
        new Brand({
            status: 1,
            type: 2, // Thực phẩm
            name: "Vifon",
            code: "VF456",
            tag: ["Ẩm thực", "Thực phẩm"],
        }),
        new Brand({
            status: 1,
            type: 2, // Thực phẩm
            name: "Phở 24",
            code: "P24FT",
            tag: ["Ẩm thực", "Thực phẩm"],
        }),
        new Brand({
            status: 1,
            type: 2, // Thực phẩm
            name: "VN Food",
            code: "VNFD123",
            tag: ["Ẩm thực", "Thực phẩm"],
        }),
        new Brand({
            status: 1,
            type: 2, // Thực phẩm
            name: "Nutifood",
            code: "NTF789",
            tag: ["Dinh dưỡng", "Thực phẩm"],
        }),
        new Brand({
            status: 1,
            type: 2, // Thực phẩm
            name: "Dalat Milk",
            code: "DLM678",
            tag: ["Sữa", "Thực phẩm"],
        }),
        new Brand({
            status: 1,
            type: 2, // Thực phẩm
            name: "Phô Mai",
            code: "PMI567",
            tag: ["Phô Mai", "Thực phẩm"],
        }),
        new Brand({
            status: 1,
            type: 2, // Thực phẩm
            name: "Fisher",
            code: "FSH789",
            tag: ["Hải sản", "Thực phẩm"],
        }),
        new Brand({
            status: 1,
            type: 2, // Thực phẩm
            name: "VinMart",
            code: "VMT123",
            tag: ["Siêu thị", "Thực phẩm"],
        }),
        new Brand({
            status: 1,
            type: 2, // Thực phẩm
            name: "Sunflower",
            code: "SNF456",
            tag: ["Dầu ăn", "Thực phẩm"],
        }),
        new Brand({
            status: 1,
            type: 2, // Thực phẩm
            name: "Huda Beer",
            code: "HDBR789",
            tag: ["Bia", "Thực phẩm"],
        }),
        // Thêm 5 nhãn hàng khác vào đây
    ];
}
export { brandRouter }


