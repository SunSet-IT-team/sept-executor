import {Box, Button, Typography} from '@mui/material';
import {useStyles} from './styles';
import {Order} from '../../model/types';

type OrderCardProps = {
    order: Order;
};

/**
 * Базовый шаблон отображения карточки заказа
 */
const OrderCard = ({order}: OrderCardProps) => {
    const styles = useStyles();

    return (
        <Box sx={styles.container}>
            <Box>
                <Typography component="p" sx={styles.title}>
                    Заявка №{order.id}
                </Typography>
                <Typography component="p" sx={styles.info}>
                    Дата: {order.date}
                </Typography>
                <Typography component="p" sx={styles.info}>
                    Услуга: {order.service.name}
                </Typography>
                <Typography component="p" sx={styles.info}>
                    Адрес: {order.address}
                </Typography>
            </Box>
            <Box sx={styles.btns}>
                <Button>Принять</Button>
                <Button>Отказать</Button>
            </Box>
        </Box>
    );
};

export default OrderCard;
