import {ServerAns} from '../../../shared/types/share';
import {ExecutorWorkFormat} from '../model/types';

/**
 * DTO для получения данных после регистрации
 */
export type RegisterDTO = ServerAns<ExecutorDTO>;

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
export type GetMeDTO = ServerAns<{
    id: string;
    about: string;
    companyName: string;
    completedOrders: number;
    description: null | string;
    experience: number;
    files: [];
    rating: number;
    workFormat: ExecutorWorkFormat;
    user: {
        email: string;
        status: string;
        phone: string;
        lastName: string | null;
        firstName: string | null;
        files: [];
    };
}>;

/**
 * DTO подтверждения почты
 */
export type VerifyEmailDTO = ServerAns<null>;

/**
 * DTO подтверждения почты
 */
export type ResendCodeDTO = ServerAns<null>;

/**
 * DTO исполнителя
 */
export type ExecutorDTO = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    phone: string;
    role: 'EXECUTOR';
    status: 'UNVERIFIED';
    verificationCode: string;
};
