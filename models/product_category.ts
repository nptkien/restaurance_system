class ProductCategory {
    _id?: string;
    name: string;
    code: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    tags: string[];
    status: number;
    type: number;
    providerId?: string;
    productType?: string;
    // Hàm khởi tạo
    constructor({
        _id,
        name = "",
        code = "",
        description = "",
        createdAt = "",
        updatedAt = "",
        tags = [],
        status = 0,
        type = 0,
        providerId = "",
        productType = "",
    }: {
        _id?: string;
        name?: string;
        code?: string;
        description?: string;
        createdAt?: string;
        updatedAt?: string;
        tags?: string[];
        status?: number;
        type?: number;
        providerId?: string;
        productType?: string;
    } = {}) {
        this._id = _id;
        this.name = name;
        this.code = code;
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.tags = tags;
        this.status = status;
        this.type = type;
        this.providerId = providerId;
        this.productType = productType;
    }

    // Hàm chuyển đối thành chuỗi
    toString(): string {
        return `ProductCategory { _id: ${this._id}, name: ${this.name}, code: ${this.code}, description: ${this.description}, createdAt: ${this.createdAt}, updatedAt: ${this.updatedAt}, tags: [${this.tags.join(', ')}], status: ${this.status}, type: ${this.type}, providerId: ${this.providerId}, productType: ${this.productType} }`;
    }
}
export { ProductCategory }