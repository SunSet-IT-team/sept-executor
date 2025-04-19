import {ServerAns} from '../../../shared/types/share';
import {FileDTO} from '../../user/api/dto';

/**
 * DTO для получения чата по заказу
 */
export type GetOrderChatDTO = ServerAns<{
    theme: string;
    orderId: string;
    id: number;
    participants: {
        chatId: number;
        id: number;
        userId: number;
        user: {
            name: 'Покупатель';
            profile: {
                profilePhoto?: FileDTO;
            };
        };
    }[];
}>;

/**
 * DTO для получения чата с поддержкой
 */
export type GetAdminChatDTO = ServerAns<{
    theme: string;
    orderId: string;
    id: number;
    participants: {
        chatId: number;
        id: number;
        userId: number;
        user: {
            name: 'Покупатель';
            profile: {
                profilePhoto?: FileDTO;
            };
        };
    }[];
}>;
