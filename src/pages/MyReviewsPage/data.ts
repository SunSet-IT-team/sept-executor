import {IReview} from '../../entities/order/ui/review/model/types';

export const reviews_data: IReview[] = [
    {
        order: {
            id: '39-19',
            date: '16 июля, 16:00',
            address: 'Садовая, 15',
            customer: {
                name: 'Светлана',
                avatarUrl: 'https://placehold.co/90x90',
            },
        },
        review: {
            rating: 4,
            text: 'Работой компании остался очень доволен. Приятное общение, пунктуально. К работе меня не привлекали. Предоставили шланги, через 1,5 часа все было закончено.',
        },
    },
    {
        order: {
            id: '39-19',
            date: '16 июля, 16:00',
            address: 'Садовая, 15',
            customer: {
                name: 'Светлана',
                avatarUrl: 'https://placehold.co/90x90',
            },
        },
        review: {
            rating: 4,
            text: 'Работой компании остался очень доволен. Приятное общение, пунктуально. К работе меня не привлекали. Предоставили шланги, через 1,5 часа все было закончено.',
        },
    },
];
