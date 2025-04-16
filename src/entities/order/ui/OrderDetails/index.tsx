import {Box, Typography} from '@mui/material';
import OrderDataList from './OrderDataList';
import {Order} from '../../model/types';
import {useStyles} from './styles';

type OrderDetailsProps = {
    order: Order;
};

/**
 * Шаблон деталей заказа
 */
const OrderDetails = ({order}: OrderDetailsProps) => {
    const styles = useStyles();

    return (
        <Box>
            <Typography variant="h6" sx={styles.titleBefDataSx}>
                Общие данные
            </Typography>
            <OrderDataList order={order} />
        </Box>
    );
};

export default OrderDetails;
