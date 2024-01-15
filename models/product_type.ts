class ProductType {
    _id: string;
    name: string;
    description: string;
    shortDescription: string;
    status: number;
    type: number;
    // Hàm khởi tạo
    constructor({
        _id = "",
        name = "",
        description = "",
        shortDescription = "",
        status = 0,
        type = 0,
    }: {
        _id?: string;
        name?: string;
        description?: string;
        shortDescription?: string;
        status?: number;
        type?: number;
    } = {}) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.shortDescription = shortDescription;
        this.status = status;
        this.type = type;
    }

    // Hàm chuyển đối thành chuỗi
    toString(): string {
        return `ProductType { _id: ${this._id}, name: ${this.name}, description: ${this.description}, shortDescription: ${this.shortDescription}, status: ${this.status}, type: ${this.type} }`;
    }
}