import { Document, model, Model, Schema, Types } from "mongoose";
import { Brand } from '../../../models';
interface BrandDocument extends Brand, Document {
    _id: string;
    toJSON: () => {}
}
const brandSchema = new Schema<BrandDocument, Model<BrandDocument>>({
    name: String,
    status: Number,
    type: Number,
    code: String,
    logo: String,
    tag: [String]

}, { versionKey: false, timestamps: true, });

export const BrandModel = model("Brand", brandSchema);