import {Executor} from '../model/types';
import {AuthDTO, GetMeDTO} from './dto';

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
 * Переводить GetMeDTO в  нормальный Executor
 */
export const mapGetMeDTO = (dto: GetMeDTO['data']): Executor => {
    return {
        id: dto.id,
        email: dto.user.email,
        phone: dto.user.phone,
        name: dto.companyName,
        priority: 1000,
        profileImage: '',

        about: dto.about,
        experience: `${dto.experience}`,
        workFormat: dto.workFormat,
        city: 'Москва',
        orderQty: dto.completedOrders,
        docs: {
            register: '',
            approve: '',
        },
        rating: {
            value: dto.rating,
            count: 10,
        },
    };
};
