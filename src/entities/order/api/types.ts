import {AxiosPromise} from 'axios';
import {
    AcceptOrderDTO,
    CompleteOrderDTO,
    GetOrder,
    GetOrdersDTO,
    GetReviews,
    RejectOrderDTO,
} from './dto';
import {OrderStatus} from '../model/types';

/**
 * Интерфейс для API закзаов
 */
export interface OrderApiMethods {
    /**
     * Получить заказы
     */
    getOrders: (param?: OrderApiGetOrdersParams) => AxiosPromise<GetOrdersDTO>;

    /**
     * Принять заказ
     */
    acceptOrder: (id: number | string) => AxiosPromise<AcceptOrderDTO>;

    /**
     * Отклонить заказ
     */
    rejectOrder: (id: number | string) => AxiosPromise<RejectOrderDTO>;

    /**
     * Завершить заказ
     */
    completeOrder: (
        id: number | string,
        params: OrderApiCompleteOrderParams
    ) => AxiosPromise<CompleteOrderDTO>;

    /**
     * Получить заказ по id
     */
    getOrderById: (id: number | string) => AxiosPromise<GetOrder>;

    /**
     * Получить отзывы
     */
    getReviews: (params: OrderApiGetReviewsParams) => AxiosPromise<GetReviews>;
}

export type OrderApiGetOrdersParams = {
    page?: number;
    limit?: number;
    status?: OrderStatus;
};

export type OrderApiGetReviewsParams = {
    page?: number;
    limit?: number;
    targetId: number;
};

export type OrderApiCompleteOrderParams = {
    reportFiles: File[];
    total: number;
};
