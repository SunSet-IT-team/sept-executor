import {useMutation, useQueryClient} from '@tanstack/react-query';
import {orderApi} from '../../api';
import {OrderStatus} from '../types';

/**
 * Принимает заказ в работу (меняет статус)
 * и вызывает обновление заказов по другим ключам
 */
export const useAcceptOrder = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (orderId: string | number) => {
            try {
                const res = await orderApi.acceptOrder(orderId);
                if (!res.data.success) throw new Error(res.data.error);
                return res;
            } catch (error) {
                console.error('Ошибка в mutationFn:', error);
                throw error;
            }
        },

        onSuccess: (data) => {
            queryClient.invalidateQueries({queryKey: ['orders']});
            queryClient.invalidateQueries({
                queryKey: ['order', `${data.data.data.order.id}`],
            });
            queryClient.invalidateQueries({
                queryKey: ['orders', OrderStatus.PENDING],
            });
            queryClient.invalidateQueries({
                queryKey: ['orders', OrderStatus.IN_PROGRESS],
            });
        },
    });
};
