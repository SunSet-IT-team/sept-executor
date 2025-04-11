import {Route, Routes, Navigate} from 'react-router-dom';
import {NavLayout} from '../../pages/layouts/NavLayout';
import {SlugPages} from './pages';
import {AuthLayout} from '../../pages/layouts/AuthLayout';

export const AppRouter = () => {
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
                <Route path={`/${SlugPages.LOGIN}`} element={<>Login</>} />
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
                <Route index element={<>Главная</>} />

                <Route path={`${SlugPages.CHAT}/:chatId`} element={<>Чат</>} />
            </Route>

            {/* Резервный маршрут (404 или редирект) */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};
