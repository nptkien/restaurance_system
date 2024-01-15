class Brand {
    _id?: string;
    status: number;
    type: number;
    name: string;
    code: string;
    tag: string[];
    logo: string;
    constructor({
        _id,
        status = 0,
        type = 0,
        name = "",
        code = "",
        tag = [],
        logo = "",
    }: {
        _id?: string;
        status?: number;
        type?: number;
        name?: string;
        code?: string;
        tag?: string[];
        logo?: string;
    } = {}) {
        this._id = _id;
        this.status = status;
        this.type = type;
        this.name = name;
        this.code = code;
        this.tag = tag;
        this.logo = logo;
    }

    // Hàm chuyển đối thành chuỗi
    toString(): string {
        return `Brand { _id: ${this._id}, status: ${this.status}, type: ${this.type}, name: ${this.name}, code: ${this.code}, tag: [${this.tag.join(', ')}], logo: ${this.logo} }`;
    }




    static fakeData(): Brand[] {
        const techBrands = [
            "Apple",
            "Samsung",
            "Microsoft",
            "Google",
            "Sony",
            "HP",
            "Lenovo",
            "Asus",
            "Acer",
            "Intel",
            "IBM",
            "Adobe",
            "NVIDIA",
            "LG Electronics",
            "Panasonic",
            "Xiaomi",
            "Huawei",
            "Cisco",
            "Amazon",
            // ... thêm các thương hiệu công nghệ khác
        ];

        const foodBrands = [
            "Nestle",
            "Coca-Cola",
            "McDonald's",
            "PepsiCo",
            "Unilever",
            "Kellogg's",
            "Danone",
            "Mars",
            "Hershey's",
            "Mondelez International",
            "Campbell Soup Company",
            "Conagra Brands",
            "Tyson Foods",
            "The Coca-Cola Company",
            "Heineken",
            "Ferrero",
            "Starbucks",
            "Yum! Brands",
            // ... thêm các thương hiệu thực phẩm khác
        ];

        const fakeTechBrands = techBrands.map((name, index) => {
            return new Brand({
                _id: `${index + 1}`,
                status: 1,
                type: 1,
                name,
                code: `TECH${index + 1}`,
                tag: ["Tech", "Electronics"],
                logo: `tech-logo-${index + 1}.png`,
            });
        });

        const fakeFoodBrands = foodBrands.map((name, index) => {
            return new Brand({
                _id: `${index + 1}`,
                status: 1,
                type: 2,
                name,
                code: `FOOD${index + 1}`,
                tag: ["Food", "Beverages"],
                logo: `food-logo-${index + 1}.png`,
            });
        });

        return [...fakeTechBrands, ...fakeFoodBrands];
    }

}

export { Brand }