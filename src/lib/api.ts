import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3333",
  withCredentials: false,
  timeout: 15000,
});

// Adiciona o token (se houver)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Intercepta erros e normaliza mensagens
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ||
      "Erro inesperado. Tente novamente mais tarde.";
    console.error("API Error:", message);
    return Promise.reject(message);
  }
);
