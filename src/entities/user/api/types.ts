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
     * Отправить код для сброса пароля
     */
    sendResetPasswordCode: (
        param: UserApiSendResetCodeParams
    ) => AxiosPromise<ServerAns<{message: string}>>;

    /**
     * Сбросить пароль
     */
    resetPassword: (
        param: UserApiResetPasswordParams
    ) => AxiosPromise<ServerAns<{message: string}>>;
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

    profilePhoto?: File;
    registrationDoc?: File;
    licenseDoc?: File;
    otherFiles?: File[];
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
 * Параметры для отправки кода на сброс
 */
export type UserApiSendResetCodeParams = {
    email: string;
};

/**
 * Параметры для сброса пароля
 */
export type UserApiResetPasswordParams = {
    code: string;
    newPassword: string;
    email: string;
};
