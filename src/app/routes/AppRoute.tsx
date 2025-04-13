import {Route, Routes, Navigate} from 'react-router-dom';
import {NavLayout} from '../../pages/layouts/NavLayout';
import {SlugPages} from './pages';
import {AuthLayout} from '../../pages/layouts/AuthLayout';
import {AuthPage} from '../../pages/AuthPage';
import HomePage from '../../pages/HomePage';
import {OrdersPage} from '../../pages/OrdersPage';
import {ServiceFormTypePage} from '../../pages/ServiceFormTypePage';
import {LoginPage} from '../../pages/LoginPage';
import { RegistrationPage } from '../../pages/RegistrationPage';

export const AppRouter = () => {
    // const isAuthenticated = true;
    const isAuthenticated = false;

    return (
        <Routes>
            {/* Публичные маршруты (без шапки) */}
            <Route
                element={
                    !isAuthenticated ? (
                        <AuthLayout />
                    ) : (
                        <Navigate to={`/`} replace />
                    )
                }
            >
                <Route path={`/${SlugPages.AUTH}`} element={<AuthPage />} />
                <Route path={`/${SlugPages.REGISTER}`}>
                    <Route
                        index
                        element={<Navigate to={'choose-form'} replace />}
                    />
                    <Route
                        path={`choose-form`}
                        element={<ServiceFormTypePage />}
                    />
                    <Route
                        path={`collect-info`}
                        element={<RegistrationPage />}
                    />
                </Route>
                <Route path={`/${SlugPages.LOGIN}`} element={<LoginPage />} />
            </Route>

            {/* Приватные маршруты (с шапкой через Layout) */}
            <Route
                path="/"
                element={
                    isAuthenticated ? (
                        <NavLayout />
                    ) : (
                        <Navigate to={`/${SlugPages.LOGIN}`} replace />
                    )
                }
            >
                <Route index element={<HomePage />} />
                <Route path={`/${SlugPages.ORDERS}`} element={<OrdersPage />} />

                <Route path={`/${SlugPages.PROFILE}`} element={<>Профиль</>} />

                <Route path={`/${SlugPages.CHAT}/:chatId`} element={<>Чат</>} />
            </Route>

            {/* Резервный маршрут (404 или редирект) */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};
