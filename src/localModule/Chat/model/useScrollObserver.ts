import {useEffect, useRef} from 'react';
import {Message} from './types';

/**
 * Отслеживает изменения и скроллить до конца
 */
export const useScrollObserver = (data: Message[]) => {
    const messageListRef = useRef<HTMLDivElement>(null); // Реф на контейнер списка

    // Сразу крутим в низ
    useEffect(() => {
        if (!messageListRef || !messageListRef.current) return;

        setTimeout(() => {
            if (!messageListRef || !messageListRef.current) return;

            messageListRef.current.scrollTo({
                top: messageListRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }, 50);
    }, [messageListRef.current]);

    // Скролл вниз при изменении messages
    useEffect(() => {
        if (!messageListRef || !messageListRef.current) return;

        // Если скролл уже внизу или почти внизу — скроллим
        const {scrollTop, scrollHeight, clientHeight} = messageListRef.current;
        const isNearBottom = scrollHeight - (scrollTop + clientHeight) < 200;

        if (isNearBottom) {
            // Небольшая задержка для гарантированного обновления DOM
            setTimeout(() => {
                if (!messageListRef || !messageListRef.current) return;

                messageListRef.current.scrollTo({
                    top: messageListRef.current.scrollHeight,
                    behavior: 'smooth',
                });
            }, 50);
        }
    }, [data.length]);

    return {
        messageListRef,
    };
};
