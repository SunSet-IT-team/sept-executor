import {createAsyncThunk} from '@reduxjs/toolkit';
import {userApi} from '../api';
import {Executor} from './types';
import {AppThunkParams} from '../../../shared/types/share';
import {mapExecutorDTO} from '../api/mapping';

/**
 * Запрашиваем данные о себе
 */
export const fetchMe = createAsyncThunk<
    Executor | null,
    undefined,
    AppThunkParams
>('user/fetchMe', async (_, {rejectWithValue}) => {
    try {
        const token = localStorage.getItem('token');

        if (!token) return null;

        const {data} = await userApi.getMe();

        // Значит ошибка
        if (data.error) return null;

        return mapExecutorDTO(data.data);
    } catch (error: any) {
        return rejectWithValue(
            error.response?.data?.message || 'Ошибка загрузки заказов'
        );
    }
});
