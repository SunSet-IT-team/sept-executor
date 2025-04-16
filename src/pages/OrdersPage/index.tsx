import {Box} from '@mui/material';
import {FC} from 'react';
import {PageTitle} from '../../feature/PageTitle';
import {MyOrdersList} from '../../widgets/MyOrdersList/MyOrdersList';

export const OrdersPage: FC = () => {
    return (
        <Box py={'26px'}>
            <PageTitle title="Мои заказы" />
            <MyOrdersList orders={[]} />
        </Box>
    );
};
