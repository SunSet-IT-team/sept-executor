import {Button} from '@mui/material';
import {Order, OrderStatus} from '../../../model/types';
import {useNavigate} from 'react-router-dom';
import {SlugPages} from '../../../../../app/routes/pages';
import {useStyles} from './styles';
import {useAcceptOrder} from '../../../model/query/useAcceptOrder';
import {useRejectOrder} from '../../../model/query/useRejectOrder';
import {toast} from 'react-toastify';
import {useState} from 'react';

type OrderCardBtnsProps = {
    order: Order;
};

/**
 * Кнопки и логика кнопок для заказа
 */
const OrderCardBtns = ({order}: OrderCardBtnsProps) => {
    const [isProcessing, setIsProcessing] = useState(false);
    const {status, id} = order;

    const accept = useAcceptOrder();
    const reject = useRejectOrder();

    const styles = useStyles();

    const navigate = useNavigate();

    const handleClickClose = () => {
        navigate(`/${SlugPages.ORDERS}/${id}`);
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
        <>
            {status === OrderStatus.IN_PROGRESS && (
                <Button
                    sx={styles.btn}
                    variant="contained"
                    onClick={handleClickClose}
                    disabled={isProcessing}
                >
                    Закрыть
                </Button>
            )}
            {status === OrderStatus.PENDING && (
                <>
                    <Button
                        variant="contained"
                        sx={styles.btnWhite}
                        onClick={handleClickAccept}
                        disabled={isProcessing}
                    >
                        Принять
                    </Button>
                    <Button
                        variant="contained"
                        sx={styles.btn}
                        onClick={handleClickReject}
                        disabled={isProcessing}
                    >
                        Отклонить
                    </Button>
                </>
            )}
        </>
    );
};

export default OrderCardBtns;
