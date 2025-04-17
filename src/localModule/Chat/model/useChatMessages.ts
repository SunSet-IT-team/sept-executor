import {keepPreviousData, useInfiniteQuery} from '@tanstack/react-query';
import {chatApi} from '../api';
import {mapMessageDTO} from '../api/mapping';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';

/**
 * Динамическое получение сообщений
 */
export const useChatMessages = (chatId: string | number) => {
    const {ref, inView} = useInView();

    const {
        data,
        isLoading: isFirstLoading,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
        isSuccess,
    } = useInfiniteQuery({
        queryKey: ['chatMessages', chatId],

        queryFn: async ({pageParam}) => {
            const response = await chatApi.getChatMessages(chatId, {
                page: pageParam,
            });

            if (!response.data.success) {
                throw new Error(
                    response.data.error || 'Ошибка получения Сообщений'
                );
            }

            return response;
        },

        getNextPageParam: (data) => {
            let nextPage = data.data.data.page + 1;
            if (nextPage > data.data.data.pages) nextPage = null;

            return nextPage;
        },

        placeholderData: keepPreviousData,
        select: (data) =>
            data.pages.flatMap((page) => {
                return (
                    page?.data?.data?.items?.map((el) => mapMessageDTO(el)) ??
                    []
                );
            }),

        staleTime: 1000 * 60 * 5, // 5 минут
        initialPageParam: 1,
    });

    const isLoading = isFirstLoading || isFetchingNextPage;

    useEffect(() => {
        if (inView && hasNextPage && !isLoading) {
            fetchNextPage();
        }
    }, [inView, isSuccess, hasNextPage, fetchNextPage, isLoading]);

    return {data, isLoading, ref};
};
