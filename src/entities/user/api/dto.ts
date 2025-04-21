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
 * DTO для получения обновления данных
 */
export type ChangeMeDTO = ServerAns<ExecutorDTO>;

/**
 * DTO получения токена
 */
export type AuthDTO = ServerAns<{
    token: string;
    user: ExecutorDTO;
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
    reviewCount: number;
    ordersCount?: number;
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
    profilePhotos: FileDTO[] | null;
    licenseDocs: FileDTO[] | null;
    registrationDocs: FileDTO[] | null;
    rating: number;
    workFormat: ExecutorWorkFormat;
};

/**
 * Покупатель
 */
export type CustomerDTO = {
    email: string;
    name: string;
    id: number;
    profile: CustomerProfileDTO;
    role: 'CUSTOMER';
};

/**
 * Профиль
 */
export type CustomerProfileDTO = {
    addresses: AddressDTO[];
    ordersCount: number;
    phone: string;
    priority: number;
    profilePhoto: FileDTO | null;
};

/**
 * Адресс
 */
export type AddressDTO = {
    id: number;
    value: string;
};

/**
 * Файл, который приходит с сервера
 */
export interface FileDTO {
    id: number;
    type?: string;
    url: string;
}
