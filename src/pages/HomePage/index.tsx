import {MyOrdersList} from '../../widgets/MyOrdersList/MyOrdersList';
import {NavLayout} from '../layouts/NavLayout';
import {Helmet} from 'react-helmet-async';
import ProfileLayout from '../layouts/ProfileLayout';
import {useEffect} from 'react';
import {orderApi} from '../../entities/order/api';

/**
 * Домашняя страница
 */
const HomePage = () => {
    useEffect(() => {
        orderApi.getOrders().then((r) => console.log(r.data));
    }, []);

    return (
        <>
            <Helmet>
                <title>Главная</title>
            </Helmet>
            <ProfileLayout>
                <NavLayout>
                    <MyOrdersList orders={[]} />
                </NavLayout>
            </ProfileLayout>
        </>
    );
};

export default HomePage;
