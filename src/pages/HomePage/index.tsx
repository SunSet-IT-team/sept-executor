import {MyOrdersList} from '../../widgets/MyOrdersList/MyOrdersList';
import {NavLayout} from '../layouts/NavLayout';
import {Helmet} from 'react-helmet-async';
import ProfileLayout from '../layouts/ProfileLayout';
import {useEffect} from 'react';
import {orderApi} from '../../entities/order/api';
import {useFetchOrders} from '../../entities/order/model/useFetchOrders';
import InfinityList from '../../feature/InfinityList';
import OrderCard from '../../entities/order/ui/OrderCard';

/**
 * Домашняя страница
 */
const HomePage = () => {
    const {orders, isLoading, ref} = useFetchOrders();
    console.log(orders);

    return (
        <>
            <Helmet>
                <title>Главная</title>
            </Helmet>
            <ProfileLayout>
                <NavLayout>
                    <InfinityList
                        observedRef={ref}
                        isLoading={isLoading}
                        titleNoLength="Заказы не найдены"
                    >
                        {orders !== undefined &&
                            orders.map((el) => <OrderCard order={el} />)}
                    </InfinityList>
                </NavLayout>
            </ProfileLayout>
        </>
    );
};

export default HomePage;
