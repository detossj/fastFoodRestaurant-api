import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

const API_URL = `${API_BASE_URL}/api`;

export default {
    API_BASE_URL,
     // AUTH
    Login: (data) => axios.post(`${API_URL}/auth/login`, data),
    Register: (data) => axios.post(`${API_URL}/auth/register`, data),
    getAllProducts: () => axios.get(`${API_URL}/products`),
    getAllCategories: () => axios.get(`${API_URL}/categories`),
    getAllPromotions: () => axios.get(`${API_URL}/promotions`),
};
