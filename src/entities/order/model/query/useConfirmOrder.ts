import {useMutation, useQueryClient} from '@tanstack/react-query';
import {orderApi} from '../../api';
import {OrderApiCompleteOrderParams} from '../../api/types';
import {toast} from 'react-toastify';

/**
 * Подтверждаем заказ и меняем данные в кеше
 */
export const useConfirmOrder = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({
            id,
            params,
        }: {
            id: number | string;
            params: OrderApiCompleteOrderParams;
        }) => {
            const res = await orderApi.completeOrder(id, params);

            if (!res.data.success) {
                throw new Error(res.data.error || 'Ошибка сервера');
            }
            return res;
        },

        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ['order', `${data.data.data.order.id}`],
            });

            toast.success('Вы успешно завершили заказ');
        },
        onError: (error: any) => {
            const message = error?.response?.data?.message || error?.message;
            toast.error(message || 'Ошибка завершения заказа');
        },
    });
};
