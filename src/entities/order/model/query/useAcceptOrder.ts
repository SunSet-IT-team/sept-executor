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
            console.log('Начало mutationFn'); // Должно появиться в консоли
            try {
                const res = await orderApi.acceptOrder(orderId);
                console.log('Ответ API:', res); // Проверьте структуру ответа
                if (!res.data.success) throw new Error(res.data.error);
                return res;
            } catch (error) {
                console.error('Ошибка в mutationFn:', error);
                throw error;
            }
        },

        // onMutate: async (orderId) => {
        //     await queryClient.cancelQueries({
        //         queryKey: ['orders'],
        //     });
        //     await queryClient.cancelQueries({
        //         queryKey: ['orders', OrderStatus.PENDING],
        //     });
        //     await queryClient.cancelQueries({
        //         queryKey: ['orders', OrderStatus.IN_PROGRESS],
        //     });

        //     const previousDefault = queryClient.getQueryData<Order[]>([
        //         'orders',
        //     ]);

        //     const previousPending = queryClient.getQueryData<Order[]>([
        //         'orders',
        //         OrderStatus.PENDING,
        //     ]);
        //     const previousInProgress = queryClient.getQueryData<Order[]>([
        //         'orders',
        //         OrderStatus.IN_PROGRESS,
        //     ]);

        //     // Удаляем из PENDING
        //     queryClient.setQueryData<Order[]>(['orders'], (old) => {
        //         if (!Array.isArray(old)) {
        //             return [];
        //         }

        //         return old?.filter((order) => order.id !== orderId) || [];
        //     });

        //     // Удаляем из PENDING
        //     queryClient.setQueryData<Order[]>(
        //         ['orders', OrderStatus.PENDING],
        //         (old) => {
        //             if (!Array.isArray(old)) {
        //                 return [];
        //             }

        //             return old?.filter((order) => order.id !== orderId) || [];
        //         }
        //     );

        //     // Добавляем в IN_PROGRESS
        //     queryClient.setQueryData<Order[]>(
        //         ['orders', OrderStatus.IN_PROGRESS],
        //         (old) => {
        //             const updatedOrder = previousPending?.find(
        //                 (o) => o.id === orderId
        //             );
        //             return updatedOrder
        //                 ? [
        //                       ...(old || []),
        //                       {
        //                           ...updatedOrder,
        //                           status: OrderStatus.IN_PROGRESS,
        //                       },
        //                   ]
        //                 : old || [];
        //         }
        //     );

        //     return {previousPending, previousInProgress, previousDefault};
        // },

        // onError: (err, orderId, context) => {
        //     // Откатываем изменения
        //     if (context?.previousDefault) {
        //         queryClient.setQueryData(['orders'], context.previousDefault);
        //     }
        //     if (context?.previousPending) {
        //         queryClient.setQueryData(
        //             ['orders', OrderStatus.PENDING],
        //             context.previousPending
        //         );
        //     }
        //     if (context?.previousInProgress) {
        //         queryClient.setQueryData(
        //             ['orders', OrderStatus.IN_PROGRESS],
        //             context.previousInProgress
        //         );
        //     }
        // },

        // onSettled: () => {
        //     queryClient.invalidateQueries({
        //         queryKey: ['orders'],
        //     });
        //     queryClient.invalidateQueries({
        //         queryKey: ['orders', OrderStatus.PENDING],
        //     });
        //     queryClient.invalidateQueries({
        //         queryKey: ['orders', OrderStatus.IN_PROGRESS],
        //     });
        // },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['orders']});
            queryClient.invalidateQueries({
                queryKey: ['orders', OrderStatus.PENDING],
            });
            queryClient.invalidateQueries({
                queryKey: ['orders', OrderStatus.IN_PROGRESS],
            });
        },
    });
};
