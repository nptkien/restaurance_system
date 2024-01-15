import { Document, model, Model, Schema, Types } from "mongoose";
export interface ProductDocument extends ProductCategory, Document {
    _id: any;
}
import { ProductCategory, } from 'models';
const productCategorySchema = new Schema<ProductDocument, Model<ProductDocument>>({
    name: String,
    providerId: {
        type: Types.ObjectId,
        // ref: appSettingTbl
    },
    productType: {
        type: Types.ObjectId,
        // ref: appSettingTbl
    },
    code: String,
    status: Number,
    type: Number,
    description: String,
    tags: [String]

}, { versionKey: false, timestamps: true, });

export const ProductCategoryModel = model("ProductCategory", productCategorySchema);