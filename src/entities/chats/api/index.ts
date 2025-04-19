import api from '../../../app/api';
import {GetAdminChatDTO, GetOrderChatDTO} from './dto';
import {ChatsApiMethods} from './types';

/**
 * API для взаимодействия с чатами
 */
export const ChatsApi: ChatsApiMethods = {
    getOrderChat: (orderId: string | number) =>
        api.get<GetOrderChatDTO>(`/chat/order/${orderId}`),

    getAdminChat: () => api.get<GetAdminChatDTO>(`/chat/support/`),

    createAdminChat: (params) =>
        api.post<GetAdminChatDTO>(`/chat/support/`, {
            theme: params,
        }),
};
