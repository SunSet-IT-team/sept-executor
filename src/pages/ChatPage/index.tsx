import {Navigate, useParams} from 'react-router-dom';
import {Box} from '@mui/material';
import {Helmet} from 'react-helmet-async';
import {useFetchChatOrder} from '../../entities/chats/model/useFetchOrderChat';
import LoadPage from '../LoadPage';
import {useHandleBack} from '../../feature/PageTitle/useHandleBack';
import {useAppSelector} from '../../app/store/hook';
import {getCurrentUser} from '../../entities/user/model/selectors';
import {getImagePath} from '../../shared/utils/share';
import {ChatForm} from 'sunset-chat';

/**
 * Страница чата по заказам
 */
const ChatPage = () => {
    const {orderId} = useParams();

    const user = useAppSelector(getCurrentUser);

    const {data, isPending} = useFetchChatOrder(orderId || 0);

    const {handleBack} = useHandleBack();

    if (!orderId) return <Navigate to="/" />;

    if (isPending && !data) return <LoadPage />;

    const notCurrentUser = data.data.data.participants.find(
        (el) => `${el.userId}` !== user.id
    );

    const chat = {
        id: data.data.data.id,
        messages: [],
        currentUserId: user.id,
        additionalInfo: data.data.data.theme,
        newMessages: 0,
        chatUser: {
            id: notCurrentUser.userId,
            name: notCurrentUser.user.name,
            imagePath: notCurrentUser.user.profile.profilePhoto
                ? getImagePath(notCurrentUser.user.profile.profilePhoto.url)
                : '',
        },
    };

    return (
        <>
            <Helmet>
                <title>Чат по заказу</title>
            </Helmet>
            <Box sx={{height: '100dvh'}}>
                <ChatForm chat={chat} handleCloseChat={handleBack} />
            </Box>
        </>
    );
};

export default ChatPage;
