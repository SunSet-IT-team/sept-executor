import {Box} from '@mui/material';
import {FC} from 'react';
import {PageTitle} from '../../feature/PageTitle/PageTitle';
import {ordersData} from './data';
import {MyOrdersList} from '../../widgets/MyOrdersList/MyOrdersList';

export const OrdersPage: FC = () => {
    return (
        <Box py={'26px'}>
            <PageTitle title="Мои заказы" />
            <MyOrdersList orders={ordersData} />
        </Box>
    );
};
