import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import {
    Box,
    Button,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
    ThemeProvider,
} from '@mui/material';
import {useState} from 'react';
import {SendIcon} from '../../ui/icons/SendIcon';
import {useStyles} from './styles';
import ChatHeader from '../../ui/ChatHeader';
import MessageList from '../../ui/MessageList';
import {Chat, Message} from '../../model/types';
import {chatTheme} from '../../theme';
import {useSocket} from '../../model/useSocket';

type ChatFormProps = {
    chat: Chat;
    handleCloseChat?: () => void;
};

export const ChatForm = ({chat, handleCloseChat}: ChatFormProps) => {
    const [message, setMessage] = useState<string>('');

    const onNewMessage = (msg: any) => {
        console.log(msg);
    };

    const {socket} = useSocket({
        chatId: chat.id,
        events: {
            onNewMessage,
        },
    });

    const currentUserId = 1;

    /**
     * Отправка сообщения
     */
    const handleSend = () => {
        if (!message.trim()) return; // Не отправляем пустые сообщения

        const newMessage: Message = {
            id: Date.now().toString(), // Используем timestamp как временный ID
            tempId: Date.now().toString(),
            chatId: chat.id,
            senderId: currentUserId || 0,
            isLoading: true,
            readed: false,
            createdAt: new Date().toLocaleTimeString(),
            content: message,
        };

        socket.emit('sendMessage', {
            chatId: newMessage.chatId,
            text: newMessage.content,
            tempId: newMessage.tempId,
        });

        setMessage('');
    };

    const handleAttach = () => {
        alert('Прикрепление файлов пока не работает');
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const styles = useStyles();

    return (
        <ThemeProvider theme={chatTheme}>
            <Box sx={styles.form}>
                <ChatHeader chatUser={chat.chatUser} />

                <MessageList
                    messages={chat.messages}
                    additionalInfo={chat.additionalInfo}
                />

                <Stack sx={styles.messageForm}>
                    <Box
                        sx={{
                            display: 'flex',
                            width: '100%',
                            alignItems: 'center',
                        }}
                    >
                        <TextField
                            variant="outlined"
                            fullWidth
                            value={message}
                            placeholder="Написать сообщение..."
                            sx={styles.messageArea}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyUp={handleKeyPress}
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment
                                            position="start"
                                            sx={{pl: 1}}
                                        >
                                            <IconButton
                                                edge="start"
                                                onClick={handleAttach}
                                                sx={{p: 0}}
                                            >
                                                <AddCircleOutlineRoundedIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleSend}
                                                disabled={!message.trim()}
                                            >
                                                <SendIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </Box>

                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleCloseChat}
                    >
                        Закрыть чат
                    </Button>
                </Stack>
            </Box>
        </ThemeProvider>
    );
};
