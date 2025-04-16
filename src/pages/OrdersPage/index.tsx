import {FC, useState} from 'react';
import {BackLayout} from '../layouts/BackLayout';
import {Helmet} from 'react-helmet-async';
import InfinityList from '../../feature/InfinityList';
import {NavLayout} from '../layouts/NavLayout';
import {useFetchOrders} from '../../entities/order/model/query/useFetchOrders';
import OrderCard from '../../entities/order/ui/OrderCard';
import {OrderStatus} from '../../entities/order/model/types';
import OrderFilterStatus from '../../feature/OrderFilterStatus';

/**
 * Страница моих заказов
 */
export const OrdersPage: FC = () => {
    const [status, setStatus] = useState<OrderStatus | undefined>();
    const {orders, isLoading, ref} = useFetchOrders(status);

    return (
        <>
            <Helmet>
                <title>Мои заказы</title>
            </Helmet>
            <BackLayout title="Мои заказы">
                <NavLayout>
                    <OrderFilterStatus onChange={(s) => setStatus(s)} />
                    <InfinityList
                        observedRef={ref}
                        isLoading={isLoading}
                        titleNoLength="Заказы не найдены"
                    >
                        {orders &&
                            orders.map((el) => (
                                <OrderCard order={el} key={el.id} />
                            ))}
                    </InfinityList>
                </NavLayout>
            </BackLayout>
        </>
    );
};
