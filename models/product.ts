
class Product {
    _id?: string;
    name: string;
    serial: string;
    status: number;
    type: number;
    price: number;
    discountPrice: number;
    description: string;
    shortDescription: string;
    thumbnail: string;
    categoryId?: string;
    screenShot: string[];
    video: string[];
    unit: string;
    currency: string;
    // Hàm khởi tạo
    constructor({
        _id,
        name = "",
        serial = "",
        status = 0,
        type = 0,
        price = 0,
        discountPrice = 0,
        description = "",
        shortDescription = "",
        thumbnail = "",
        categoryId = undefined,
        screenShot = [],
        video = [],
        unit = "",
        currency = "đ"

    }: {
        _id?: string;
        name?: string;
        serial?: string;
        status?: number;
        type?: number;
        price?: number;
        discountPrice?: number;
        description?: string;
        shortDescription?: string;
        thumbnail?: string;
        categoryId?: string;
        screenShot?: string[];
        video?: string[];
        currency?: string;
        unit?: string
    } = {}) {
        this._id = _id;
        this.name = name;
        this.serial = serial;
        this.status = status;
        this.type = type;
        this.price = price;
        this.discountPrice = discountPrice;
        this.description = description;
        this.shortDescription = shortDescription;
        this.thumbnail = thumbnail;
        this.categoryId = categoryId;
        this.screenShot = screenShot;
        this.video = video;
        this.unit = unit;
        this.currency = currency;

    }

    // Hàm chuyển đối thành chuỗi
    toString(): string {
        return `Product { _id: ${this._id}, name: ${this.name}, serial: ${this.serial}, status: ${this.status}, type: ${this.type}, price: ${this.price}, discountPrice: ${this.discountPrice}, description: ${this.description}, shortDescription: ${this.shortDescription}, thumbnail: ${this.thumbnail}, categoryId: ${this.categoryId}, screenShot: [${this.screenShot.join(', ')}], video: [${this.video.join(', ')}] }`;
    }
}
export { Product }