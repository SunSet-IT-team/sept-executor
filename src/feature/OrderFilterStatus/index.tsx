import {Box, Button} from '@mui/material';
import {useState} from 'react';
import {OrderStatus} from '../../entities/order/model/types';
import {useStyles} from './styles';
import {formatOrderStatus} from '../../entities/order/utils/formaters';

type OrderFilterStatusProps = {
    onChange: (status: OrderStatus | undefined) => void;
};

/**
 * Фильтр по статусам услуг
 */
const OrderFilterStatus = ({onChange}: OrderFilterStatusProps) => {
    const [selectedStatus, setSelectedStatus] = useState<
        OrderStatus | undefined
    >(undefined);

    const handleStatusChange = (status: OrderStatus | undefined) => {
        setSelectedStatus(status);
        onChange(status);
    };

    const styles = useStyles();
    return (
        <Box sx={styles.container}>
            <Button
                onClick={() => handleStatusChange(null)}
                variant="outlined"
                sx={!selectedStatus ? styles.selectedButton : styles.button}
            >
                Все&nbsp;заказы
            </Button>

            {Object.values(OrderStatus).map((status) => (
                <Button
                    key={status}
                    sx={
                        selectedStatus === status
                            ? styles.selectedButton
                            : styles.button
                    }
                    onClick={() => handleStatusChange(status)}
                    variant="outlined"
                >
                    {formatOrderStatus(status)}
                </Button>
            ))}
        </Box>
    );
};

export default OrderFilterStatus;
