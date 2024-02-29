export class User {
    _id: string;
    firstName: string;
    lastName: string;
    age: number;
    gender: number;
    avatar?: string;
    email: string;
    phoneNumber: string;
    address: string;
    password: string;

    // Hàm khởi tạo
    constructor({
        _id = "",
        firstName = "",
        lastName = "",
        age = 0,
        gender = 0,
        avatar = "",
        email = "",
        phoneNumber = "",
        address = "",
        password = "",
    }: {
        _id?: string;
        firstName?: string;
        lastName?: string;
        age?: number;
        gender?: number;
        avatar?: string;
        email?: string;
        phoneNumber?: string;
        address?: string;
        password?: string;
    } = {}) {
        this._id = _id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.avatar = avatar;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.password = password;
    }

    // Hàm chuyển đối thành chuỗi
    toString(): string {
        return `User { _id: ${this._id}, firstName: ${this.firstName}, lastName: ${this.lastName}, age: ${this.age}, gender: ${this.gender}, avatar: ${this.avatar}, email: ${this.email}, phoneNumber: ${this.phoneNumber}, address: ${this.address}, password: ${this.password} }`;
    }
}
