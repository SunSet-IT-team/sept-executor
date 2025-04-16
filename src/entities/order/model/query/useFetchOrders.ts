import {keepPreviousData, useInfiniteQuery} from '@tanstack/react-query';
import {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
import {orderApi} from '../../api';
import {mapOrderDTO} from '../../api/mapping';
import {OrderStatus} from '../types';

/**
 * Получение всех заказов пользователя
 * c динамическим добавлением
 */
export const useFetchOrders = (status: OrderStatus | undefined) => {
    const {ref, inView} = useInView();

    const {
        data: orders,
        isLoading: isFirstLoading,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
        isSuccess,
    } = useInfiniteQuery({
        queryFn: async ({pageParam}) => {
            const response = await orderApi.getOrders({
                page: pageParam,
                status: status,
            });

            if (!response.data.success) {
                throw new Error(
                    response.data.error || 'Ошибка получения заказов'
                );
            }

            return response;
        },

        queryKey: ['orders', status],
        initialPageParam: 1,
        placeholderData: keepPreviousData,

        getNextPageParam: (data) => {
            let nextPage = data.data.data.page + 1;
            if (nextPage > data.data.data.pages) nextPage = null;

            return nextPage;
        },

        select: (data) =>
            data.pages.flatMap((page) => {
                return (
                    page?.data?.data?.items?.map((el) => mapOrderDTO(el)) ?? []
                );
            }),
    });

    const isLoading = isFirstLoading || isFetchingNextPage;

    useEffect(() => {
        if (inView && hasNextPage && !isLoading) {
            fetchNextPage();
        }
    }, [inView, isSuccess, hasNextPage, fetchNextPage, isLoading]);

    return {orders, isLoading, ref};
};
