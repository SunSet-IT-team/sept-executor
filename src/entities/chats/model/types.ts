import {
    WithEmail,
    WithId,
    WithName,
    WithPhone,
    WithPriority,
} from '../../../shared/types/share';
import {Pagination, Sort} from '../../../shared/types/share';

/**
 * Слайс для хранения данных об услугах
 */
export interface ChatSlice {
    chats: Chat[];
    pagination: Pagination;
    sort: Sort | null;
}

/**
 * Чат
 */
export type Chat = WithId & {
    messages: Message[];
    // interlocutor: Executor | Customer;
    interlocutor: Executor;
    additionalInfo?: string;
};

/**
 * Сообщение
 */
export type Message = {
    id: number | string;
    chatId: number;
    content?: string;
    fileUrl?: string;
    senderId: number;
    readed: boolean;
    createdAt: string;
    isLoading?: boolean;
};

/**
 * Исполнитель
 */
export type Executor = WithPriority &
    WithId &
    WithName &
    WithEmail &
    WithPhone & {
        profileImage: string;
        about: string;
        experience: string;
        typeService: ExecutorServiceType;
        city: string;
        orderQty: number;
        docs: {
            register: string;
            approve: string;
        };
        rating: {
            value: number;
            count: number;
        };
    };

/**
 * Формы оказания услуг
 */
export enum ExecutorServiceType {
    // ИП
    SOLE = 'SOLE',

    // Юридическое лицо
    LEGAL_ENTITY = 'LEGAL_ENTITY',

    // Частник
    PRIVATE_PERSON = 'PRIVATE_PERSON',
}
