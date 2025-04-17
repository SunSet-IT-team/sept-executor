import {ServerAns} from './types';

/**
 * DTO для получения данных чата
 */
export type GetChatDTO = ServerAns<{
    message: string;
    chat: any;
}>;

/**
 * Файл, который приходит с сервера
 */
export interface FileDTO {
    id: number;
    type?: string;
    url: string;
}

/**
 * Сообщение, которое приходит с сервера
 */
export interface MessageDTO {
    chatId: number;
    createdAt: string;
    files: FileDTO[];
    id: number;
    tempId?: number | string;
    isMine: boolean;
    senderId: number;
    text?: string;
}
