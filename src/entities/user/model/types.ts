/**
 * Исполнитель
 */
export type Executor = {
    id: string;
    name: string;
    email: string;
    phone: string;
    priority: number;
    profileImage: string;
    licenseDoc: string;
    registrationDoc: string;
    about: string;
    experience: string;
    workFormat: ExecutorWorkFormat;
    city: string;
    orderQty: number;
    rating: {
        value: number;
        count: number;
    };
};
/**
 * Типы работ
 */

export enum ExecutorWorkFormat {
    /**
     * Физ лицо
     */
    INDIVIDUAL = 'INDIVIDUAL',

    /**
     * ООО
     */
    LEGAL_ENTITY = 'LEGAL_ENTITY',

    /**
     * ИП
     */
    SOLE_PROPRIETOR = 'SOLE_PROPRIETOR',
}

/**
 * Заказчик
 */
export type Customer = {
    profileImage: string;
    orderQty: number;
    addresses: Address[];
    phone: string;
    email: string;
    name: string;
    id: string;
    priority: number;
};

/**
 * Адрес
 */
export type Address = {
    id: string;
    address: string;
};
