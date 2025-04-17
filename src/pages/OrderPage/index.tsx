import {Helmet} from 'react-helmet-async';
import {BackLayout} from '../layouts/BackLayout';
import {Navigate, useParams} from 'react-router-dom';
import {useFetchOrder} from '../../entities/order/model/query/useFetchOrder';
import OrderMainInfo from '../../entities/order/ui/OrderMainInfo';
import {Box} from '@mui/material';
import OrderDetails from '../../entities/order/ui/OrderDetails';
import OrderButtons from '../../entities/order/ui/OrderButtons';
import {useState} from 'react';
import {OrderCloseForm} from '../../widgets/OrderCloseForm';
import LoadPage from '../LoadPage';
import {OrderStatus} from '../../entities/order/model/types';
import OrderReview from '../../entities/order/ui/OrderReview';
import OrderReport from '../../entities/order/ui/OrderReport';

/**
 * Страница одного конкретного заказа
 */
const OrderPage = () => {
    const [openForm, setOpenForm] = useState(false);

    const {orderId} = useParams();

    if (!orderId) return <Navigate to="/" />;

    const {data: order} = useFetchOrder(orderId);

    console.log(order);

    if (!order) return <LoadPage />;

    return (
        <>
            <Helmet>
                <title>Заказ №{orderId}</title>
            </Helmet>
            <BackLayout title={`Заказ №${orderId}`}>
                <Box>
                    <OrderMainInfo order={order} />
                    <OrderDetails order={order} />
                    {!openForm && (
                        <OrderButtons
                            order={order}
                            handleClickClose={() => setOpenForm(true)}
                        />
                    )}
                    {openForm && order.status === OrderStatus.IN_PROGRESS && (
                        <OrderCloseForm orderId={orderId} />
                    )}
                    {order.report && <OrderReport report={order.report} />}
                    {order.review && <OrderReview review={order.review} />}
                </Box>
            </BackLayout>
        </>
    );
};

export default OrderPage;
