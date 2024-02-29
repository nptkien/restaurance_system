// // api.ts
// import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// // Đường dẫn cơ sở của API
// const BASE_URL = 'https://api.example.com';

// // Tạo một đối tượng Axios
// const api: AxiosInstance = axios.create({
//     baseURL: BASE_URL,
// });

// // Middleware để xử lý token, headers, interceptors, ...
// api.interceptors.request.use(
//     function (config) {
//         // Thêm các xử lý cần thiết trước khi gửi yêu cầu
//         // Ví dụ: Thêm token vào headers
//         // const token = 'your_access_token';
//         // if (token) {
//         //   config.headers['Authorization'] = `Bearer ${token}`;
//         // }
//         return config;
//     },
//     (error) => {
//         // Xử lý lỗi trước khi gửi yêu cầu
//         return Promise.reject(error);
//     }
// );

// api.interceptors.response.use(
//     (response: AxiosResponse) => {
//         // Xử lý dữ liệu trả về từ yêu cầu thành công
//         return response;
//     },
//     (error) => {
//         // Xử lý lỗi từ yêu cầu không thành công
//         return Promise.reject(error);
//     }
// );

// export default api;