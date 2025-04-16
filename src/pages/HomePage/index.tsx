import {NavLayout} from '../layouts/NavLayout';
import {Helmet} from 'react-helmet-async';
import ProfileLayout from '../layouts/ProfileLayout';
import {useFetchOrders} from '../../entities/order/model/query/useFetchOrders';
import InfinityList from '../../feature/InfinityList';
import OrderCard from '../../entities/order/ui/OrderCard';
import {OrderStatus} from '../../entities/order/model/types';

/**
 * Домашняя страница
 */
const HomePage = () => {
    const {orders, isLoading, ref} = useFetchOrders(OrderStatus.PENDING);

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
                        titleNoLength="Новых заказов пока нет"
                    >
                        {orders !== undefined &&
                            orders.map((el) => (
                                <OrderCard order={el} key={el.id} />
                            ))}
                    </InfinityList>
                </NavLayout>
            </ProfileLayout>
        </>
    );
};

export default HomePage;
