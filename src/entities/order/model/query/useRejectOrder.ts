import {useMutation, useQueryClient} from '@tanstack/react-query';
import {orderApi} from '../../api';
import {Order, OrderStatus} from '../types';

/**
 * отзаываемся от заказа (меняет статус)
 * и вызывает обновление заказов по другим ключам
 */
export const useRejectOrder = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (orderId: string | number) => {
            const res = await orderApi.rejectOrder(orderId);

            if (!res.data.success) {
                throw new Error(res.data.error || 'Ошибка сервера');
            }
            return res;
        },

        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['orders']});
            queryClient.invalidateQueries({
                queryKey: ['orders', OrderStatus.PENDING],
            });
            queryClient.invalidateQueries({
                queryKey: ['orders', OrderStatus.REJECTED],
            });
        },
    });
};
