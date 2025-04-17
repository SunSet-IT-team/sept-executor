export const reviewsData: IOrderWithReviewData[] = [
    {
        orderWithReview: {
            id: '39-19',
            name: 'Светлана',
            date: '16 июля, 16:00',
            address: 'Садовая, 15',
            review: {
                rating: 4,
                text: 'Работой компании остался очень доволен. Приятное общение, пунктуально. К работе меня не привлекали. Предоставили шланги, через 1,5 часа все было закончено.',
            },
        },
        customer: {
            id: 1,
            title: 'Светлана',
            imgUrl: 'https://placehold.co/90x90',
        },
    },
    {
        orderWithReview: {
            id: '39-20',
            name: 'Светлана',
            date: '16 июля, 16:00',
            address: 'Садовая, 15',
            review: {
                rating: 4,
                text: 'Работой компании остался очень доволен. Приятное общение, пунктуально. К работе меня не привлекали. Предоставили шланги, через 1,5 часа все было закончено.',
            },
        },
        customer: {
            id: 1,
            title: 'Светлана',
            imgUrl: 'https://placehold.co/90x90',
        },
    },
];

export interface IOrderWithReviewData {
  orderWithReview: IOrderWithReview,
  customer: ICustomer
}

export interface ICustomer {
  id: number,
  title: string,
  imgUrl: string
}

export interface IOrder {
    id: string;
    date: string;
    orderName: string;
    status: OrderStatus;
    review?: IOrderReview;
}

export interface IOrderWithReview {
    id: IOrder['id'];
    name: IOrder['orderName'];
    date: IOrder['date'];
    address: string;
    review: IOrderReview;
}

export type IOrderReview = {
    rating: number;
    text: string;
};

/**
 * Статусы заказа
 */
export enum OrderStatus {
    /**
     * В работе
     */
    IN_PROGRESS = 'В работе',
    /**
     * Выполнен
     */
    COMPLETED = 'Выполнен',
    /**
     * Заявка принята
     */
    CONFIRMED = 'Заявка принята',
}