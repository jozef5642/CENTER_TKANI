import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// Базовый URL API - замените на ваш реальный URL
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Создаем экземпляр axios с базовой конфигурацией
const $api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Интерцептор для добавления токена авторизации (если нужно)
$api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Интерцептор для обработки ошибок
$api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Обработка неавторизованного доступа
      localStorage.removeItem('token');
    }
    return Promise.reject(error);
  }
);

export default $api;

