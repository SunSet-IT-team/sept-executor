import {useMutation, useQueryClient} from '@tanstack/react-query';
import {orderApi} from '../../api';
import {Order, OrderStatus} from '../types';

/**
 * Принимает заказ в работу (меняет статус)
 * и вызывает обновление заказов по другим ключам
 */
export const useAcceptOrder = () => {
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
                queryKey: ['orders', OrderStatus.IN_PROGRESS],
            });

            const previousPending = queryClient.getQueryData<Order[]>([
                'orders',
                OrderStatus.PENDING,
            ]);
            const previousInProgress = queryClient.getQueryData<Order[]>([
                'orders',
                OrderStatus.IN_PROGRESS,
            ]);

            // Удаляем из PENDING
            queryClient.setQueryData<Order[]>(
                ['orders', OrderStatus.PENDING],
                (old) => old?.filter((order) => order.id !== orderId) || []
            );

            // Добавляем в IN_PROGRESS
            queryClient.setQueryData<Order[]>(
                ['orders', OrderStatus.IN_PROGRESS],
                (old) => {
                    const updatedOrder = previousPending?.find(
                        (o) => o.id === orderId
                    );
                    return updatedOrder
                        ? [
                              ...(old || []),
                              {
                                  ...updatedOrder,
                                  status: OrderStatus.IN_PROGRESS,
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
                    ['orders', OrderStatus.IN_PROGRESS],
                    context.previousInProgress
                );
            }
        },

        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: ['orders', OrderStatus.PENDING],
            });
            queryClient.invalidateQueries({
                queryKey: ['orders', OrderStatus.IN_PROGRESS],
            });
        },
    });
};
