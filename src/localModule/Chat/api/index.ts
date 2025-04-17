import axios from 'axios';
import {СhatApiMethods} from './types';

const chatApiInstanse = axios.create({
    baseURL: 'http://localhost:3000/api', // Базовый URL вашего API
    timeout: 10000, // Таймаут запроса
    headers: {
        'Content-Type': 'application/json',
    },
});

chatApiInstanse.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

/**
 * API для работы с чатом
 */
export const chatApi: СhatApiMethods = {
    getChatMessages: (chatId, params) => {
        const page = params.page || 1;
        const limit = params.limit || 20;

        const res = chatApiInstanse.get(
            `/chat/${chatId}/messages?page=${page}&limit=${limit}`
        );

        return res;
    },
};
