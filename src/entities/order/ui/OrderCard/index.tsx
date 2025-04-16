import {Box, Button, Typography} from '@mui/material';
import {useStyles} from './styles';
import {Order} from '../../model/types';
import OrderCardBtns from './OrderCardBtns';
import {Link} from 'react-router-dom';
import {SlugPages} from '../../../../app/routes/pages';

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
            <Box
                component={Link}
                to={`/${SlugPages.ORDERS}/${order.id}`}
                sx={styles.text}
            >
                <Typography component="p" sx={styles.title}>
                    Заявка №{order.id}
                </Typography>
                <Typography component="p" sx={styles.info}>
                    <b>Дата:</b> {order.date}
                </Typography>
                <Typography component="p" sx={styles.info}>
                    <b>Услуга:</b> {order.service.name}
                </Typography>
                <Typography component="p" sx={styles.info}>
                    <b>Адрес:</b> {order.address}
                </Typography>
            </Box>
            <Box sx={styles.btns}>
                <OrderCardBtns order={order} />
            </Box>
        </Box>
    );
};

export default OrderCard;
