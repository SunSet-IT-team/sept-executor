import {FC} from 'react';
import {MyOrdersList} from '../../widgets/MyOrdersList/MyOrdersList';
import {BackLayout} from '../layouts/BackLayout';
import {Helmet} from 'react-helmet-async';
import InfinityList from '../../feature/InfinityList';
import {NavLayout} from '../layouts/NavLayout';
import {useFetchOrders} from '../../entities/order/model/query/useFetchOrders';
import OrderCard from '../../entities/order/ui/OrderCard';
import {OrderStatus} from '../../entities/order/model/types';

/**
 * Страница моих заказов
 */
export const OrdersPage: FC = () => {
    const {orders, isLoading, ref} = useFetchOrders(OrderStatus.PENDING);

    return (
        <>
            <Helmet>
                <title>Мои заказы</title>
            </Helmet>
            <BackLayout>
                <NavLayout>
                    <MyOrdersList orders={[]} />
                    <InfinityList
                        observedRef={ref}
                        isLoading={isLoading}
                        titleNoLength="Заказы не найдены"
                    >
                        {orders.map((el) => (
                            <OrderCard order={el} />
                        ))}
                    </InfinityList>
                </NavLayout>
            </BackLayout>
        </>
    );
};
