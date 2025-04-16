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
            const res = await orderApi.acceptOrder(orderId);

            if (!res.data.success) {
                throw new Error(res.data.error || 'Ошибка сервера');
            }
            return res;
        },

        onMutate: async (orderId) => {
            await queryClient.cancelQueries({
                queryKey: ['orders', OrderStatus.PENDING],
            });
            await queryClient.cancelQueries({
                queryKey: ['orders', OrderStatus.REJECTED],
            });

            const previousPending = queryClient.getQueryData<Order[]>([
                'orders',
                OrderStatus.PENDING,
            ]);
            const previousInProgress = queryClient.getQueryData<Order[]>([
                'orders',
                OrderStatus.REJECTED,
            ]);

            // Удаляем из PENDING
            queryClient.setQueryData<Order[]>(
                ['orders', OrderStatus.PENDING],
                (old) => old?.filter((order) => order.id !== orderId) || []
            );

            // Добавляем в REJECTED
            queryClient.setQueryData<Order[]>(
                ['orders', OrderStatus.REJECTED],
                (old) => {
                    const updatedOrder = previousPending?.find(
                        (o) => o.id === orderId
                    );
                    return updatedOrder
                        ? [
                              ...(old || []),
                              {
                                  ...updatedOrder,
                                  status: OrderStatus.REJECTED,
                              },
                          ]
                        : old || [];
                }
            );

            return {previousPending, previousInProgress};
        },

        onError: (err, orderId, context) => {
            // Откатываем изменения
            if (context?.previousPending) {
                queryClient.setQueryData(
                    ['orders', OrderStatus.PENDING],
                    context.previousPending
                );
            }
            if (context?.previousInProgress) {
                queryClient.setQueryData(
                    ['orders', OrderStatus.REJECTED],
                    context.previousInProgress
                );
            }
        },

        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: ['orders', OrderStatus.PENDING],
            });
            queryClient.invalidateQueries({
                queryKey: ['orders', OrderStatus.REJECTED],
            });
        },
    });
};
