import {Button} from '@mui/material';
import {Order, OrderStatus} from '../../../model/types';
import {useNavigate} from 'react-router-dom';
import {SlugPages} from '../../../../../app/routes/pages';
import {useStyles} from './styles';
import {useAcceptOrder} from '../../../model/query/useAcceptOrder';
import {useRejectOrder} from '../../../model/query/useRejectOrder';
import {toast} from 'react-toastify';

type OrderCardBtnsProps = {
    order: Order;
};

/**
 * Кнопки и логика кнопок для заказа
 */
const OrderCardBtns = ({order}: OrderCardBtnsProps) => {
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
        accept.mutate(order.id, {
            onSuccess: () => toast.success('Заказ принят'),
        });
    };

    /** Обработчик отмены заказа */
    const handleClickReject = () => {
        reject.mutate(order.id, {
            onSuccess: () => toast.success('Заказ отклонён'),
        });
    };

    return (
        <>
            {status === OrderStatus.IN_PROGRESS && (
                <Button
                    sx={styles.btn}
                    variant="contained"
                    onClick={handleClickClose}
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
                    >
                        Принять
                    </Button>
                    <Button
                        variant="contained"
                        sx={styles.btn}
                        onClick={handleClickReject}
                    >
                        Отклонить
                    </Button>
                </>
            )}
        </>
    );
};

export default OrderCardBtns;
