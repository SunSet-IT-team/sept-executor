import {Message} from '../model/types';
import {MessageDTO} from './dto';

/**
 * Состыковывает MessageDTO с нашим нормальным DTO
 */
export const mapMessageDTO = (msg: MessageDTO): Message => {
    return {
        id: msg.id,
        tempId: msg.tempId,
        chatId: msg.chatId,
        content: msg.text,
        fileUrl: '',
        senderId: msg.senderId,
        readed: true,
        createdAt: msg.createdAt,
        isLoading: false,
    };
};
