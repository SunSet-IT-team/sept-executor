import {Box, Button} from '@mui/material';
import {Order, OrderStatus} from '../../model/types';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import {SlugPages} from '../../../../app/routes/pages';
import {useAcceptOrder} from '../../model/query/useAcceptOrder';
import {useRejectOrder} from '../../model/query/useRejectOrder';
import {useStyles} from './styles';

type OrderButtonsProps = {
    order: Order;
    handleClickClose: () => void;
};

/**
 * Шаблон кнопок на странице заказа
 */
const OrderButtons = ({order, handleClickClose}: OrderButtonsProps) => {
    const [isProcessing, setIsProcessing] = useState(false);

    const accept = useAcceptOrder();
    const reject = useRejectOrder();

    const styles = useStyles();

    const navigate = useNavigate();

    const handleClickChat = () => {
        navigate(`/${SlugPages.CHAT}/${order.id}`);
    };

    /** Обработчик принятия заказа */
    const handleClickAccept = () => {
        setIsProcessing(true);
        accept.mutate(order.id, {
            onSuccess: () => toast.success('Заказ принят'),
            onSettled: () => {
                setIsProcessing(false);
            },
        });
    };

    /** Обработчик отмены заказа */
    const handleClickReject = () => {
        setIsProcessing(true);
        reject.mutate(order.id, {
            onSuccess: () => toast.success('Заказ отклонён'),
            onSettled: () => {
                setIsProcessing(false);
            },
        });
    };

    return (
        <Box sx={styles.constainer}>
            {(order.status === OrderStatus.PENDING ||
                order.status === OrderStatus.IN_PROGRESS) && (
                <Button
                    onClick={handleClickChat}
                    disabled={isProcessing}
                    sx={styles.btn}
                >
                    Открыть чат
                </Button>
            )}
            {order.status === OrderStatus.PENDING && (
                <>
                    <Button
                        onClick={handleClickAccept}
                        disabled={isProcessing}
                        sx={styles.btn}
                    >
                        Принять
                    </Button>
                    <Button
                        onClick={handleClickReject}
                        disabled={isProcessing}
                        sx={styles.btn}
                    >
                        Отклонить
                    </Button>
                </>
            )}

            {order.status === OrderStatus.IN_PROGRESS && (
                <Button
                    onClick={handleClickClose}
                    disabled={isProcessing}
                    sx={styles.btn}
                >
                    Закрыть
                </Button>
            )}
        </Box>
    );
};

export default OrderButtons;
