import {Address, Customer, Executor} from '../model/types';
import {AddressDTO, AuthDTO, CustomerDTO, ExecutorDTO, GetMeDTO} from './dto';

/**
 * Переводить AuthDTO в  нормальный Executor
 */
export const mapAuthDTO = (dto: AuthDTO['data']): Executor => {
    const {user} = dto;
    return {
        id: user.id,
        email: user.email,
        phone: '89999999999',
        name: user.profile.companyName,
        priority: 1000,
        profileImage: '',

        about: user.profile.about,
        experience: `${user.profile.experience}`,
        workFormat: user.profile.workFormat,
        city: 'Москва',
        orderQty: 100,
        docs: {
            register: '',
            approve: '',
        },
        rating: {
            value: 10,
            count: 10,
        },
    };
};

/**
 * Переводим ExecutorDTO в нормальный Executor
 */
export const mapExecutorDTO = (dto: ExecutorDTO): Executor => {
    return {
        id: `${dto.id}`,
        email: dto.email,
        phone: dto.profile.phone,
        name: dto.profile.companyName,
        priority: dto.profile.priority,
        profileImage: dto.profile.profilePhoto || '',

        about: dto.profile.about,
        experience: `${dto.profile.experience}`,
        workFormat: dto.profile.workFormat,
        city: dto.profile.city || 'Москва',
        orderQty: dto.profile.completedOrders,
        docs: {
            register: '',
            approve: '',
        },
        rating: {
            value: dto.profile.rating,
            count: 10,
        },
    };
};

/**
 * Перевод DTO в нормальный вид
 * для заказчиков
 */
export const mapCustomerDTO = (customer: CustomerDTO): Customer => {
    return {
        id: `${customer.id}`,
        name: customer.name,
        email: customer.email,
        phone: customer.profile.phone,
        profileImage: customer.profile.profilePhoto || '',
        addresses: customer.profile.addresses.map((el) => mapAddressDTO(el)),
        orderQty: customer.profile.ordersCount,
        priority: customer.profile.priority,
    };
};

/**
 * Перевод DTO в нормальный вид
 * для адресов
 */
export const mapAddressDTO = (address: AddressDTO): Address => {
    return {
        id: `${address.id}`,
        address: address.value,
    };
};
