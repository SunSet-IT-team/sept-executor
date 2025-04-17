import {Stack, Typography} from '@mui/material';
import {useScrollObserver} from '../../model/useScrollObserver';
import {ChatMessage} from '../ChatMessage';
import {useStyles} from './styles';
import {Chat} from '../../model/types';
import {useChatMessages} from '../../model/useChatMessages';
import InfinityList from '../../feature/InfinityList';

type MessageListProps = {
    chat: Chat;
};

/**
 * Вывод списка сообщений
 */
const MessageList = ({chat}: MessageListProps) => {
    const styles = useStyles();

    const {data, isLoading, ref} = useChatMessages(chat.id);

    const messages = data || [];

    const {messageListRef} = useScrollObserver(messages);

    return (
        <Stack sx={styles.messageWrapper}>
            {chat.additionalInfo && (
                <Typography sx={styles.additionalInfo}>
                    {chat.additionalInfo}
                </Typography>
            )}

            <InfinityList
                sx={styles.messageList}
                listRef={messageListRef}
                observedRef={ref}
                isLoading={isLoading}
                titleNoLength="Сообщений пока нет..."
            >
                {messages.reverse().map((m) => (
                    <ChatMessage key={m.id} {...m} />
                ))}
            </InfinityList>
        </Stack>
    );
};

export default MessageList;
