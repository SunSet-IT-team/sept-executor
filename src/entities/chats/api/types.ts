import {AxiosPromise} from 'axios';
import {GetOrderChatDTO, GetAdminChatDTO} from './dto';

/**
 * Интерфейс для API чатов
 */
export interface ChatsApiMethods {
    /**
     * Получить чат по заказу
     */
    getOrderChat: (orderId: number | string) => AxiosPromise<GetOrderChatDTO>;

    /**
     * Получить чат с поддержкой
     */
    getAdminChat: () => AxiosPromise<GetAdminChatDTO>;
}
