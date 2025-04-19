import {getImagePath} from '../../../shared/utils/share';
import {Address, Customer, Executor} from '../model/types';
import {AddressDTO, AuthDTO, CustomerDTO, ExecutorDTO, GetMeDTO} from './dto';

/**
 * Переводить AuthDTO в  нормальный Executor
 */
export const mapAuthDTO = (dto: AuthDTO['data']): Executor => {
    return mapExecutorDTO(dto.user);
};

/**
 * Переводим ExecutorDTO в нормальный Executor
 */
export const mapExecutorDTO = (dto: ExecutorDTO): Executor => {
    return {
        id: `${dto.id}`,
        email: dto.email,
        phone: dto.profile?.phone || 'Отсутствует',
        name: dto.profile.companyName,
        priority: dto.profile.priority,
        profileImage: dto.profile.profilePhotos
            ? getImagePath(dto.profile.profilePhotos[0].url)
            : '',
        licenseDoc: dto.profile.licenseDocs
            ? getImagePath(dto.profile.licenseDocs[0].url)
            : '',
        registrationDoc: dto.profile.registrationDocs
            ? getImagePath(dto.profile.registrationDocs[0].url)
            : '',

        about: dto.profile.about,
        experience: `${dto.profile.experience}`,
        workFormat: dto.profile.workFormat,
        city: dto.profile.city || 'Москва',
        orderQty: dto.profile.completedOrders,
        rating: {
            value: dto.profile.rating,
            count: dto.reviewCount,
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
        profileImage: customer.profile.profilePhoto
            ? getImagePath(customer.profile.profilePhoto.url)
            : '',
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
