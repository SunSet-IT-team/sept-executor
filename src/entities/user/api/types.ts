import {AxiosPromise} from 'axios';
import {ServerAns} from '../../../shared/types/share';
import {
    AuthDTO,
    GetMeDTO,
    RegisterDTO,
    ResendCodeDTO,
    VerifyEmailDTO,
} from './dto';
import {ExecutorWorkFormat} from '../model/types';

/**
 * Интерфейс для API статистики
 */
export interface UserApiMethods {
    /**
     * Авторизоваться
     */
    auth: (param: UserApiAuthParams) => AxiosPromise<AuthDTO>;

    /**
     * Получить информацию о себе
     */
    getMe: () => AxiosPromise<GetMeDTO>;

    /**
     * Получить информацию о себе
     */
    register: (param: UserApiRegisterParams) => AxiosPromise<RegisterDTO>;

    /**
     * Подтверждение почты
     */
    verifyEmail: (param: UserApiVerifyParams) => AxiosPromise<VerifyEmailDTO>;

    /**
     * Переотправка почты
     */
    resendCode: (param: UserApiResendCodeParams) => AxiosPromise<ResendCodeDTO>;

    /**
     * Сбросить пароль
     */
    recovery: (
        param: UserApiRecoveryParams
    ) => AxiosPromise<ServerAns<{token: string}>>;
}

/**
 * Параметры для авторизации
 */
export type UserApiAuthParams = {
    email: string;
    password: string;
};

/**
 * Параметры для регистрации
 */
export type UserApiRegisterParams = {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    phone: string;
    workFormat: ExecutorWorkFormat;
    experience: string;
    about: string;
    city: string;
    companyName: string;
    profilePhoto?: string;
    registrationDoc?: string;
    licenseDoc?: string;
    otherFiles?: string;
};

/**
 * Параметры для подтверждения почты
 */
export type UserApiVerifyParams = {
    code: string;
    email: string;
};
/**
 * Параметры для повторной отправки кода
 */
export type UserApiResendCodeParams = {
    email: string;
};

/**
 * Параметры для сброса пароля
 */
export type UserApiRecoveryParams = {
    code: string;
    newPassword: string;
    confirmPassword: string;
};
