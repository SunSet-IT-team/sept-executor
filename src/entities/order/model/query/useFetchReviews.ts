import {keepPreviousData, useInfiniteQuery} from '@tanstack/react-query';
import {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
import {orderApi} from '../../api';
import {mapOrderDTO, mapReviewDTO} from '../../api/mapping';
import {OrderStatus} from '../types';

/**
 * Получение всех отзывов пользователя
 * c динамическим добавлением
 */
export const useFetchReviews = (targetId: number) => {
    const {ref, inView} = useInView();

    const {
        data: reviews,
        isLoading: isFirstLoading,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
        isSuccess,
    } = useInfiniteQuery({
        queryFn: async ({pageParam}) => {
            const response = await orderApi.getReviews({
                page: pageParam,
                targetId: targetId,
            });

            if (!response.data.success) {
                throw new Error(
                    response.data.error || 'Ошибка получения заказов'
                );
            }

            return response;
        },

        queryKey: ['reviews'],
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
                    page?.data?.data?.items?.map((el) => mapReviewDTO(el)) ?? []
                );
            }),
    });

    const isLoading = isFirstLoading || isFetchingNextPage;

    useEffect(() => {
        if (inView && hasNextPage && !isLoading) {
            fetchNextPage();
        }
    }, [inView, isSuccess, hasNextPage, fetchNextPage, isLoading]);

    return {reviews, isLoading, ref};
};
