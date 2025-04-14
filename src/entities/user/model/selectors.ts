import {RootState} from '../../../app/store';

/**
 * Получить пользователя
 */
export const getCurrentUser = (state: RootState) => state.user.user;

/**
 * Получить инициализацию
 */
export const getIsinited = (state: RootState) => state.user.isInited;

/**
 * Загружается ли ещё пользователь
 */
export const getIsUserLoading = (state: RootState) => state.user.isLoading;

/**
 * Получить дату для регистрации
 */
export const getUserRegisterData = (state: RootState) =>
    state.user.registerData;
