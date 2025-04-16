import {Order, OrderStatus} from '../model/types';
import {orderStatusDictionary} from './data/dictionary';

/**
 * Красивый отформатированный статус заказа
 */
export const formatOrderStatus = (orderStatus: OrderStatus) => {
    return orderStatusDictionary[orderStatus];
};

/**
 * Получить текст для кнопки
 */
export const formatOrderStatusButton = (order: Order) => {
    if (!order.review && order.status == OrderStatus.COMPLETED)
        return 'Оценить';

    if (order.status == OrderStatus.IN_PROGRESS) return 'Обсудить';

    return 'Посмотреть';
};
