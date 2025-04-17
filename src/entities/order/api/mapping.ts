import {
    mapAddressDTO,
    mapCustomerDTO,
    mapExecutorDTO,
} from '../../user/api/mapping';
import {Order, Service} from '../model/types';
import {OrderDTO, ServiceDTO} from './dto';

/**
 * Переводим OrderDTO в нормальный Order
 */
export const mapOrderDTO = (data: OrderDTO): Order => {
    return {
        address: data.address ? data.address : '',
        city: data.city ? data.city : '',
        executor: data.executor ? mapExecutorDTO(data.executor) : null,
        customer: data.customer ? mapCustomerDTO(data.customer) : null,
        comment: data.comment || '',
        payment: data.paymentMethod,
        id: `${data.id}`,
        date: new Date(data.workDate).toLocaleDateString('ru'),
        status: data.status || data.orderStaus,
        service: mapServiceDTO(data.service),
        review: null,
        septicVolume: `${data.septicVolume}`,
        septicDepth: `${data.septicDepth}`,
        septicDistance: `${data.distanceToSeptic}`,
        object: data.objectType,
    };
};

/*
 * Переводим ServiceDTO в нормальный Service
 */
export const mapServiceDTO = (service: ServiceDTO): Service => {
    return {
        id: service.id,
        name: service.name,
        priority: service.priority,
    };
};
