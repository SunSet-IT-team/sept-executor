import {useNavigate} from 'react-router-dom';
import {Box} from '@mui/material';
import {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {ChatUser, ChatForm} from 'sunset-chat';
import LoadPage from '../LoadPage';
import {useAppSelector} from '../../app/store/hook';
import {getCurrentUser} from '../../entities/user/model/selectors';
import {ChatsApi} from '../../entities/chats/api';

/**
 * Страница чата поддержки
 */
const SupportChatPage = () => {
    const [chatData, setChatData] = useState<{
        id: number;
        additionalInfo?: string;
    } | null>(null);
    const user = useAppSelector(getCurrentUser);

    const navigate = useNavigate();

    useEffect(() => {
        const f = async () => {
            try {
                const {data} = await ChatsApi.getAdminChat();
                if (data.success)
                    setChatData({
                        id: data.data.id,
                        additionalInfo: data.data.theme,
                    });
            } catch (error) {
                console.log(error);
            }
        };
        f();
    }, []);

    if (!chatData) return <LoadPage />;

    const supportChatUser: ChatUser = {
        id: 0,
        name: 'Поддержка',
    };

    const chat = {
        id: chatData.id,
        messages: [],
        chatUser: supportChatUser,
        additionalInfo: chatData.additionalInfo,
        currentUserId: user.id,
    };

    const handleBack = () => navigate('/');

    return (
        <Box sx={{maxHeight: '100dvh'}}>
            <Helmet>
                <title>Обращение к поддержке</title>
            </Helmet>
            <Box sx={{height: '100dvh'}}>
                <ChatForm chat={chat} handleCloseChat={handleBack} />
            </Box>
        </Box>
    );
};

export default SupportChatPage;
