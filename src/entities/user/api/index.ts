import api from '../../../app/api';
import {UserApiMethods} from './types';

/**
 * API для авторизации
 */
export const userApi: UserApiMethods = {
    auth: (param) => api.post(`/auth/login/executor`, param),

    getMe: () => api.get(`/executor/me`),

    recovery: (param) => api.post(`/admin/recovery`, param),

    register: (param) => api.post(`/auth/register/executor`, param),

    verifyEmail: (param) => api.post(`/auth/verify`, param),

    resendCode: (param) => api.post(`/auth/verify/resend`, param),
};
