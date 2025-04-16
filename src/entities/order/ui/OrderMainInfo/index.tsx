import {Box, Stack, Typography} from '@mui/material';
import {Order} from '../../model/types';
import {formatOrderStatus} from '../../utils/formaters';

export type OrderMainInfoProps = {
    order: Order;
};

/**
 * Отображение самой главной информации, которая находится сверху
 */
const OrderMainInfo = ({order}: OrderMainInfoProps) => {
    return (
        <Box mt={'40px'}>
            <Stack spacing={1} mb={3}>
                <Typography>
                    <strong>Услуга:</strong> {order.service.name}
                </Typography>
                <Typography>
                    <strong>Статус:</strong> {formatOrderStatus(order.status)}
                </Typography>
            </Stack>
        </Box>
    );
};

export default OrderMainInfo;
