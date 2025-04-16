import {ServerAns} from '../../../shared/types/share';
import {CustomerDTO, ExecutorDTO} from '../../user/api/dto';
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
 * DTO Принятия заказа
 */
export type AcceptOrderDTO = ServerAns<{
    data: OrderDTO;
}>;

/**
 * DTO Отклонения заказа
 */
export type RejectOrderDTO = ServerAns<{
    data: OrderDTO;
}>;

/**
 * DTO Завершения заказа
 */
export type CompleteOrderDTO = ServerAns<{
    data: OrderDTO;
}>;

/**
 * DTO Заказа
 */
export type OrderDTO = {
    address: AddressDTO;
    comment: string | null;
    customer: CustomerDTO;
    distanceToSeptic: number;
    executor: ExecutorDTO;
    id: number;
    objectType: string;
    paymentMethod: string;
    price: number | null;
    priority: number;
    septicConstructionType: string;
    septicDepth: number;
    septicVolume: number;
    service: ServiceDTO | null;
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
