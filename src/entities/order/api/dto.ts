import {ServerAns} from '../../../shared/types/share';
import {OrderStatus} from '../model/types';

/**
 * DTO получения услуг
 */
export type GetOrdersDTO = ServerAns<{
    items: OrderDTO[];
    total: number;
    page: number;
    pages: number;
    limit: number;
}>;

/**
 * DTO Заказа
 */
export type OrderDTO = {
    address: AddressDTO;
    addressId: number;
    comment: string | null;
    customerId: number;
    distanceToSeptic: number;
    executorId: number | null;
    id: number;
    objectType: string;
    paymentMethod: string;
    price: number | null;
    priority: number;
    septicConstructionType: string;
    septicDepth: number;
    septicVolume: number;
    service: ServiceDTO | null;
    serviceId: number;
    orderStaus: OrderStatus;
    status: OrderStatus;
    workDate: string;
};

/**
 * DTO Адрессa
 */
export type AddressDTO = {
    id: number;
    value: string;
};

/**
 * DTO Услуги
 */
export type ServiceDTO = {
    id: string;
    name: string;
    priority: number;
};
