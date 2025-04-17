import {useQuery} from '@tanstack/react-query';
import {orderApi} from '../../api';
import {mapOrderDTO} from '../../api/mapping';

/**
 * Получение одного конкретного заказа по id
 * c динамическим добавлением
 */
export const useFetchOrder = (id: number | string) => {
    return useQuery({
        queryFn: () => orderApi.getOrderById(id),
        queryKey: ['order', `${id}`],
        select(data) {
            try {
                return mapOrderDTO(data.data.data);
            } catch (error) {
                console.log(error);
            }
        },
    });
};
