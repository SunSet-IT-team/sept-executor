import {keepPreviousData, useInfiniteQuery} from '@tanstack/react-query';
import {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
import {orderApi} from '../api';
import {mapOrderDTO} from '../api/mapping';

/**
 * Получение всех заказов пользователя
 * c динамическим добавлением
 */
export const useFetchOrders = () => {
    const {ref, inView} = useInView();

    const {
        data: orders,
        isLoading,
        fetchNextPage,
        hasNextPage,
        isSuccess,
    } = useInfiniteQuery({
        queryFn: ({pageParam}) => orderApi.getOrders({page: pageParam}),
        queryKey: ['orders'],
        initialPageParam: 1,
        placeholderData: keepPreviousData,
        getNextPageParam: (data) => {
            let nextPage = data.data.data.page + 1;
            if (nextPage > data.data.data.pages) nextPage = null;

            return nextPage;
        },
        select: (data) =>
            data.pages.flatMap((page) => {
                return page.data.data.items.map((el) => mapOrderDTO(el));
            }),
    });

    useEffect(() => {
        if (inView && hasNextPage && !isLoading) {
            fetchNextPage();
        }
    }, [inView, isSuccess, hasNextPage, fetchNextPage]);

    return {orders, isLoading, ref};
};
