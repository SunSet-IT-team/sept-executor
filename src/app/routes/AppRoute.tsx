import {Route, Routes, Navigate, Outlet} from 'react-router-dom';
import {NavLayout} from '../../pages/layouts/NavLayout';
import {SlugPages} from './pages';
import {AuthPage} from '../../pages/auth/AuthPage';
import HomePage from '../../pages/HomePage';
import {OrdersPage} from '../../pages/OrdersPage';
import {ServiceFormTypePage} from '../../pages/auth/ServiceFormTypePage';
import {LoginPage} from '../../pages/auth/LoginPage';
import {RegistrationPage} from '../../pages/auth/RegistrationPage';
import {ConfirmationPage} from '../../pages/auth/ConfirmationPage';
import {useEffect} from 'react';
import {
    getCurrentUser,
    getIsinited,
    getIsUserLoading,
} from '../../entities/user/model/selectors';
import {useAppSelector, useAppDispatch} from '../store/hook';
import {fetchMe} from '../../entities/user/model/thunk';
import LoadPage from '../../pages/LoadPage';

export const AppRouter = () => {
    const user = useAppSelector(getCurrentUser);
    const isinited = useAppSelector(getIsinited);
    const isLoading = useAppSelector(getIsUserLoading);
    const token = localStorage.getItem('token');

    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetching = dispatch(fetchMe());

        return () => {
            fetching.abort();
        };
    }, [isinited]);

    const isAuthenticated = !!user && token;
    const isReady = isinited && !isLoading;

    if (!isReady)
        return (
            <Routes>
                <Route index element={<LoadPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        );

    return (
        <Routes>
            {/* Публичные маршруты (без шапки) */}
            <Route
                element={
                    !isAuthenticated ? (
                        <Outlet />
                    ) : (
                        <Navigate to={`/${SlugPages.AUTH}`} />
                    )
                }
            >
                <Route path={`/${SlugPages.AUTH}`} element={<AuthPage />} />

                <Route
                    path={`/${SlugPages.REGISTER_CHOOSE_FORM}`}
                    element={<ServiceFormTypePage />}
                />
                <Route
                    path={`/${SlugPages.REGISTER_COLLECT_INFO}`}
                    element={<RegistrationPage />}
                />

                <Route path={`/${SlugPages.LOGIN}`} element={<LoginPage />} />

                <Route
                    path={`/${SlugPages.CONFIRM}`}
                    element={<ConfirmationPage />}
                />
            </Route>

            {/* Приватные маршруты (с шапкой через Layout) */}
            <Route
                path="/"
                element={
                    isAuthenticated || user ? (
                        <Outlet />
                    ) : (
                        <Navigate to={`/${SlugPages.AUTH}`} replace />
                    )
                }
            >
                <Route index element={<HomePage />} />
                <Route path={`/${SlugPages.ORDERS}`} element={<OrdersPage />} />

                <Route
                    path={`/${SlugPages.ORDERS}/:orderId`}
                    element={<>Страница заказа</>}
                />

                <Route path={`/${SlugPages.PROFILE}`} element={<>Профиль</>} />

                <Route path={`/${SlugPages.CHAT}/:chatId`} element={<>Чат</>} />
            </Route>

            {/* Резервный маршрут (404 или редирект) */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};
