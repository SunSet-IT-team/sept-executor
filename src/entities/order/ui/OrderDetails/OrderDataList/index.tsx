import {Box} from '@mui/material';
import {DataItem} from '../../../../../shared/ui/DataItem/DataItem';
import {Order} from '../../../model/types';

type OrderDataListProps = {
    order: Order;
};

/**
 * Строчки отображения с информацией
 */
const OrderDataList = ({order}: OrderDataListProps) => {
    return (
        <Box>
            <DataItem label={'Дата'} value={order.date} hasUnderline={true} />
            <DataItem
                label={'Форма оплаты'}
                value={order.payment}
                hasUnderline={true}
            />
            <DataItem
                label={'Объект'}
                value={order.address}
                hasUnderline={true}
            />
            <DataItem
                label={'Вид сооружения:'}
                value={order.object}
                hasUnderline={true}
            />
            <DataItem
                label={'Объем'}
                value={order.septicVolume}
                hasUnderline={true}
            />
            <DataItem
                label={'Высота'}
                value={order.septicDepth}
                hasUnderline={true}
            />
            <DataItem
                label={'Расстояние до септика от подъезда'}
                value={order.septicDistance}
                hasUnderline={true}
            />

            {order.customer && (
                <>
                    <DataItem
                        label={'Покупатель'}
                        value={order.customer.name}
                        hasUnderline={true}
                    />
                    <DataItem
                        label={'Телефон'}
                        value={order.customer.phone}
                        hasUnderline={true}
                    />
                </>
            )}

            {order.comment && (
                <DataItem
                    label={'Комментарий'}
                    value={order.comment}
                    hasUnderline={true}
                />
            )}
        </Box>
    );
};

export default OrderDataList;
