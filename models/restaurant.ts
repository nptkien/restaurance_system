class Restaurant {
    _id: string;
    name: string;
    address: string;
    avatar: string;
    rate: number;
    domain: string;
    createdAt: string;
    status: number;
    type: number;
    // Hàm khởi tạo
    constructor({
        _id = "",
        name = "",
        address = "",
        avatar = "",
        rate = 0,
        domain = "",
        createdAt = "",
        status = 0,
        type = 0
    }: {
        _id?: string;
        name?: string;
        address?: string;
        avatar?: string;
        rate?: number;
        domain?: string;
        createdAt?: string;
        status?: number;
        type?: number
    } = {}) {
        this._id = _id;
        this.name = name;
        this.address = address;
        this.avatar = avatar;
        this.rate = rate;
        this.domain = domain;
        this.createdAt = createdAt;
        this.status = status;
        this.type = type
    }

    // Hàm chuyển đối thành chuỗi
    toString(): string {
        return `Restaurant { _id: ${this._id}, name: ${this.name}, address: ${this.address}, avatar: ${this.avatar}, rate: ${this.rate}, domain: ${this.domain}, createdAt: ${this.createdAt}, }`;
    }
}

export { Restaurant };