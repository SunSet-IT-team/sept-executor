import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ExecutorWorkFormat, Executor} from './types';
import {logout} from './auth';
import {fetchMe} from './thunk';

/**
 * Слайс для хранения данных текущего пользователя
 */

interface UserSlice {
    user: Executor | null;
    isInited: boolean;
    isLoading: boolean;
    registerData: {
        workFormat?: ExecutorWorkFormat;
        email?: string;
    };
}

const initialState: UserSlice = {
    user: null,
    isInited: false,

    isLoading: true,

    registerData: {},
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        /**
         * Установить актуального пользователя
         */
        setUser(state, action: PayloadAction<Executor | null>) {
            state.user = action.payload;
        },

        /**
         * Очистить пользователя
         */
        clearUser(state) {
            state.user = null;
            logout();
        },

        /**
         * Установить тип оказания услуг
         */
        setWorkFormat(state, action: PayloadAction<ExecutorWorkFormat>) {
            state.registerData.workFormat = action.payload;
        },

        /**
         * Установить email для регистрации
         */
        setRegisterEmail(state, action: PayloadAction<string>) {
            state.registerData.email = action.payload;
        },
    },
    extraReducers: (builder) => {
        /**
         * fetchMe
         */
        builder.addCase(
            fetchMe.fulfilled,
            (state, action: PayloadAction<Executor | null>) => {
                state.user = action.payload;
                state.isInited = true;
                state.isLoading = false;

                // // Кеширование
                // localStorage.setItem(
                //     'cachedUser',
                //     JSON.stringify(action.payload)
                // );
            }
        );

        builder.addCase(fetchMe.rejected, (state) => {
            state.user = null;
            state.isInited = true;
            state.isLoading = false;
        });
    },
});

export const {setUser, clearUser, setWorkFormat, setRegisterEmail} =
    userSlice.actions;

export const userReducer = userSlice.reducer;
