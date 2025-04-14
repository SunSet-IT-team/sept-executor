import {ServerAns} from '../../../shared/types/share';
import {ExecutorWorkFormat} from '../model/types';

/**
 * DTO для получения данных после регистрации
 */
export type RegisterDTO = ServerAns<{
    message: string;
    user: ExecutorDTO;
}>;

/**
 * DTO получения токена
 */
export type AuthDTO = ServerAns<{
    token: string;
    user: {
        email: string;
        firstName: string | null;
        id: string;
        lastName: string | null;
        profile: {
            about: string;
            companyName: string;
            experience: number;
            workFormat: ExecutorWorkFormat;
        };
    };
}>;

/**
 * DTO для получения информации о себе
 */
export type GetMeDTO = ServerAns<ExecutorDTO>;

/**
 * DTO подтверждения почты
 */
export type VerifyEmailDTO = ServerAns<{
    message: string;
    token: string;
    user: ExecutorDTO;
}>;

/**
 * DTO подтверждения почты
 */
export type ResendCodeDTO = ServerAns<null>;

/**
 * DTO исполнителя
 */
export type ExecutorDTO = {
    id: number;
    email: string;
    name: string;
    role: 'EXECUTOR';
    profile: ProfileDTO;
};

/**
 * DTO Профиля
 */
export type ProfileDTO = {
    about: string;
    city: string | null;
    companyName: string;
    completedOrders: number;
    description: null | string;
    experience: number;
    id: number;
    phone: string;
    priority: number;
    profilePhoto: null | string;
    rating: number;
    workFormat: ExecutorWorkFormat;
};
