import api from '../../../app/api';
import {UserApiMethods} from './types';

/**
 * API для авторизации
 */
export const userApi: UserApiMethods = {
    auth: (param) => api.post(`/auth/login/executor`, param),

    getMe: () => api.get(`/executor/me`),

    register: (param) =>
        api.post(`/auth/register/executor`, param, {
            headers: {'Content-Type': 'multipart/form-data'},
        }),

    verifyEmail: (param) => api.post(`/auth/verify`, param),

    resendCode: (param) => api.post(`/auth/verify/resend`, param),

    sendResetPasswordCode: (param) => api.post(`/auth/password/forgot`, param),

    resetPassword: (param) => api.post(`/auth/password/reset`, param),
};
