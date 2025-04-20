import api from '../../../app/api';
import {OrderApiMethods} from './types';

/**
 * API для заказов
 */
export const orderApi: OrderApiMethods = {
    getOrders: (param) => {
        const page = param.page || 1;
        const limit = param.limit || 10;
        let url = `/order/my?page=${page}&limit=${limit}`;

        if (param.status) {
            url += `&status=${param.status}`;
        }

        return api.get(url);
    },

    getOrderById: (id) => {
        return api.get(`/order/${id}`);
    },

    acceptOrder: (id) => {
        return api.post(`/order/${id}/accept`);
    },

    rejectOrder: (id) => {
        return api.post(`/order/${id}/reject`);
    },

    completeOrder: (id, param) => {
        const formDataToSend = new FormData();
        formDataToSend.append('total', String(param.total));

        param.reportFiles
            .filter((f: File | null) => f)
            .forEach((file: File) => {
                formDataToSend.append('reportFiles', file);
            });

        return api.post(`/order/${id}/complete`, formDataToSend, {
            headers: {'Content-Type': 'multipart/form-data'},
        });
    },

    getReviews: (param) => {
        const page = param.page || 1;
        const limit = param.limit || 10;
        let url = `/review/?page=${page}&limit=${limit}&targetId=${param.targetId}`;

        return api.get(url);
    },
};
