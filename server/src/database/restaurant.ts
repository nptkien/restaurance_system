import { Restaurant } from 'models';
import { Document, model, Model, Schema } from "mongoose";
interface RestaurantDocument extends Restaurant, Document {
    _id: string;
}
const restaurantDocumentSchema = new Schema<RestaurantDocument, Model<RestaurantDocument>>({
    name: String,
    status: Number,
    type: Number,
    rate: Number,
    domain: String,
    address: String,
    avatar: String,


}, { versionKey: false, timestamps: true, });

export const RestaurantModel = model("Restaurant", restaurantDocumentSchema);