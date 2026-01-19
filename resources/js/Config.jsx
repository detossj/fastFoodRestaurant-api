import axios from "axios";

const API_BASE_URL = "http://localhost:8000";
const API_URL = `${API_BASE_URL}/api`;

// es mejor hacer esto que axios.interceptors.request.use... porque haciendolo con axios afecta todas las request del proyecto
const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token"); 
  
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  
    return config;
});

export default {
    API_BASE_URL,
  
    // AUTH
    Login: (data) => api.post("/auth/login", data),
    Register: (data) => api.post("/auth/register", data),
    updateProfile: (data) => api.patch("/auth/profile", data),
  
    // PUBLIC / PRIVATE
    getAllProducts: () => api.get("/products"),
    getAllCategories: () => api.get("/categories"),
    getAllPromotions: () => api.get("/promotions"),
    getAllStores: () => api.get("/stores"),
};
  
  
