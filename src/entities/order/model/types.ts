import {Customer, Executor} from '../../user/model/types';

/**
 * Заказ
 */
export type Order = {
    address: string;
    city?: string;
    executor?: Executor;
    customer?: Customer;
    comment?: string;
    payment: string;
    id: string;
    date: string;
    status: OrderStatus;
    service?: Service;
    review?: Review;
    septicVolume: string;
    septicDepth: string;
    septicDistance: string;
    object: string;
};

/**
 * Услгуга
 */
export type Service = {
    id: string;
    name: string;
    priority: number;
};

/**
 * Отзыв
 */
export type Review = {
    rating: number;
    text: string;
};

/**
 * Статусы заказа
 */
export enum OrderStatus {
    /**
     * В ожидании
     */
    PENDING = 'PENDING',

    /**
     * В работе
     */
    IN_PROGRESS = 'IN_PROGRESS',

    /**
     * Выполнен
     */
    COMPLETED = 'COMPLETED',

    /**
     * Заявка отменена
     */
    REJECTED = 'REJECTED',
}
