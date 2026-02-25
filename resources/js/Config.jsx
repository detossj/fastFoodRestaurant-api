import axios from "axios";

const ipLocal = import.meta.env.VITE_IP_LOCAL;

const API_BASE_URL = `http://${ipLocal}:8000`;
const API_URL = `${API_BASE_URL}/api`;
const BASE_URL_IMAGES = `http://${ipLocal}/storage`;

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
  BASE_URL_IMAGES,

  // AUTH
  Login: (data) => api.post("/auth/login", data),
  Register: (data) => api.post("/auth/register", data),
  updateProfile: (data) => api.patch("/auth/profile", data),

  // PUBLIC / PRIVATE
  getAllProducts: () => api.get("/products"),
  getAllCategories: () => api.get("/categories"),
  getAllPromotions: () => api.get("/promotions"),
  getAllStores: () => api.get("/stores"),
  enviarCorreo: (data) => api.post("/enviar-correo",data),

  // ORDERS
  createOrder: (data) => api.post("/orders", data),
  getOrders: () => api.get("/orders"),

  // MANAGE
  getManage: () => api.get("/manage"),
  updateManage: (data) => api.post("/manage", data),
  deleteManage: (data) => api.delete("/manage", {data: data}),

};
  
  
