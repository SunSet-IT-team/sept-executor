import {ServerAns} from '../../../shared/types/share';

/**
 * DTO для получения чата по заказу
 */
export type GetOrderChatDTO = ServerAns<{
    message?: string;
    chat: any;
}>;

/**
 * DTO для получения чата с поддержкой
 */
export type GetAdminChatDTO = ServerAns<{
    message?: string;
    chat: any;
}>;
