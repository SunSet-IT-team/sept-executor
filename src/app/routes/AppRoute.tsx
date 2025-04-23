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
import OrderPage from '../../pages/OrderPage';
import ChatPage from '../../pages/ChatPage';
import ProfilePage from '../../pages/ProfilePage';
import MyreviewsPage from '../../pages/MyReviewsPage';
import StatsPage from '../../pages/StatsPage';
import SupportPage from '../../pages/SupportPage/Support';
import SupportChatPage from '../../pages/SupportPage/SupportChat';
import SettingPage from '../../pages/SettingPage';
import DocsPage from '../../pages/DocsPage';
import {ResetPage} from '../../pages/auth/ResetPage';
import {ChooseAuthPage} from '../../pages/auth/ChooseAuthPage';

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
                element={!isAuthenticated ? <Outlet /> : <Navigate to={`/`} />}
            >
                <Route
                    path={`/${SlugPages.CHOOSE_AUTH}`}
                    element={<ChooseAuthPage />}
                />

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

                <Route path={`/${SlugPages.RESET}`} element={<ResetPage />} />

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
                        <Navigate to={`/${SlugPages.CHOOSE_AUTH}`} replace />
                    )
                }
            >
                <Route index element={<HomePage />} />
                <Route path={`/${SlugPages.ORDERS}`} element={<OrdersPage />} />

                <Route
                    path={`/${SlugPages.ORDERS}/:orderId`}
                    element={<OrderPage />}
                />

                <Route
                    path={`/${SlugPages.PROFILE}`}
                    element={<ProfilePage />}
                />

                <Route
                    path={`/${SlugPages.SUPPORT}`}
                    element={<SupportPage />}
                />

                <Route
                    path={`/${SlugPages.SUPPORT}/:chatId`}
                    element={<SupportChatPage />}
                />

                <Route
                    path={`/${SlugPages.MY_DOCUMENTS}`}
                    element={<DocsPage />}
                />

                <Route
                    path={`/${SlugPages.SETTINGS}`}
                    element={<SettingPage />}
                />

                <Route
                    path={`/${SlugPages.MY_REVIEWS}`}
                    element={<MyreviewsPage />}
                />
                <Route
                    path={`/${SlugPages.STATISTICS}`}
                    element={<StatsPage />}
                />

                <Route
                    path={`/${SlugPages.CHAT}/:orderId`}
                    element={<ChatPage />}
                />
            </Route>

            {/* Резервный маршрут (404 или редирект) */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};
