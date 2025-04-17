import {Box} from '@mui/material';
import {Helmet} from 'react-helmet-async';
import {ChatForm} from '../../localModule/Chat';
import {useFetchChatOrder} from '../../entities/chats/model/useFetchOrderChat';
import {Navigate, useNavigate, useParams} from 'react-router-dom';
import {SlugPages} from '../../app/routes/pages';

/**
 * Страница чата по заказам
 */
const ChatPage = () => {
    const {orderId} = useParams();

    const navigate = useNavigate();

    const {data, isPending} = useFetchChatOrder(orderId || 0);

    console.log(data);

    if (!orderId) return <Navigate to="/" />;

    const chat = {
        id: 1,
        messages: [],
        chatUser: {
            id: 1,
            name: 'ООО иди в попу',
        },
    };

    return (
        <>
            <Helmet>
                <title>Чат по заказу</title>
            </Helmet>
            <Box sx={{height: '100dvh'}}>
                <ChatForm
                    chat={chat}
                    handleCloseChat={() =>
                        navigate(`/${SlugPages.ORDERS}/${orderId}`)
                    }
                />
            </Box>
        </>
    );
};

export default ChatPage;
