import {AxiosPromise} from 'axios';
import {GetOrdersDTO} from './dto';

/**
 * Интерфейс для API закзаов
 */
export interface OrderApiMethods {
    /**
     * Получить заказы
     */
    getOrders: (param?: OrderApiGetOrdersParams) => AxiosPromise<GetOrdersDTO>;
}

export type OrderApiGetOrdersParams = {
    page?: number;
    limit?: number;
};
