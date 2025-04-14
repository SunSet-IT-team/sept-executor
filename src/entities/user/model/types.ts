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
    about: string;
    experience: string;
    workFormat: ExecutorWorkFormat;
    city: string;
    orderQty: number;
    docs: {
        register: string;
        approve: string;
    };
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
