import {AxiosPromise} from 'axios';
import {
    AcceptOrderDTO,
    CompleteOrderDTO,
    GetOrdersDTO,
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
        params: any
    ) => AxiosPromise<CompleteOrderDTO>;
}

export type OrderApiGetOrdersParams = {
    page?: number;
    limit?: number;
    status?: OrderStatus;
};
