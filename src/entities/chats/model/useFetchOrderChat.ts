import {useQuery} from '@tanstack/react-query';
import {ChatsApi} from '../api';

/**
 * Получение одного конкретного чата по id
 * c динамическим добавлением
 */
export const useFetchChatOrder = (orderId: number | string) => {
    return useQuery({
        queryFn: () => ChatsApi.getOrderChat(orderId),
        queryKey: ['chatOrder', `${orderId}`],
    });
};
