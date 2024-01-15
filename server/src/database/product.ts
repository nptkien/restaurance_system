import { Document, model, Model, Schema, Types } from "mongoose";
import { Product } from '../../../models'
interface ProductDocument extends Product, Document {
    _id: any;
}
const productSchema = new Schema<ProductDocument, Model<ProductDocument>>({
    name: String,
    categoryId: {
        type: Types.ObjectId,
        // ref: appSettingTbl
    },
    serial: String,
    status: Number,
    type: Number,
    price: Number,
    discountPrice: Number,

    description: String,
    shortDescription: String,
    video: [String],
    screenShot: [String],
    thumbnail: String,
    unit: String,
    currency: String,

}, { versionKey: false, timestamps: true, });

export const ProductModel = model("Product", productSchema);