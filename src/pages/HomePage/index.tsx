import {Box} from '@mui/material';
import ChatHeader from '../../widgets/ChatForm/ui/ChatHeader';
import {placeholderExecutor} from '../../entities/chats/model/slice';
import {MyOrdersList} from '../../widgets/MyOrdersList/MyOrdersList';
import {ordersData} from '../OrdersPage/data';
import ProfileUp from '../../widgets/ProfileUp';

/**
 * Домашняя страница
 */
const HomePage = () => {
    return (
        <Box sx={{height: '100dvh'}}>
            <ProfileUp interlocutor={placeholderExecutor} />
            <Box sx={{maxHeight: '50dvh', overflowY: 'auto', mt: 2}}>
                <MyOrdersList orders={ordersData} />
            </Box>
        </Box>
    );
};

export default HomePage;
