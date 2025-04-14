import {MyOrdersList} from '../../widgets/MyOrdersList/MyOrdersList';
import {ordersData} from '../OrdersPage/data';
import {NavLayout} from '../layouts/NavLayout';
import {Helmet} from 'react-helmet-async';
import ProfileLayout from '../layouts/ProfileLayout';

/**
 * Домашняя страница
 */
const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Главная</title>
            </Helmet>
            <ProfileLayout>
                <NavLayout>
                    <MyOrdersList orders={ordersData} />
                </NavLayout>
            </ProfileLayout>
        </>
    );
};

export default HomePage;
