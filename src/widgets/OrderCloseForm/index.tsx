import {zodResolver} from '@hookform/resolvers/zod';
import {Box, Button, Typography} from '@mui/material';
import {useState} from 'react';
import {FormContainer} from 'react-hook-form-mui';

import {toast} from 'react-toastify';
import {useStyles} from './styles';
import InputFactory from '../../feature/InputFactory';
import {OrderCloseData, orderCloseSchema} from './schema';
import {OrderCloseDefaultValues} from './data';
import DocsList from './DocsList';
import {orderApi} from '../../entities/order/api';
import {OrderApiCompleteOrderParams} from '../../entities/order/api/types';
import {useConfirmOrder} from '../../entities/order/model/query/useConfirmOrder';

type OrderCloseFormProps = {
    orderId: number | string;
};

/**
 * Форма закрытия заявки
 */
export const OrderCloseForm = ({orderId}: OrderCloseFormProps) => {
    const styles = useStyles();

    const {mutate, isPending} = useConfirmOrder();

    /**
     * При подтверждении заказа
     */
    const onSubmit = async (formData: Required<OrderCloseData>) => {
        const params: OrderApiCompleteOrderParams = {
            total: formData.total,
            reportFiles: formData.files.filter((el) => el) as File[],
        };

        mutate({id: orderId, params});
    };

    return (
        <Box sx={styles.container}>
            <Typography sx={styles.title} variant="h6">
                Отчёт
            </Typography>

            <FormContainer
                // Removed the invalid 'control' prop
                onSuccess={onSubmit}
                resolver={zodResolver(orderCloseSchema)}
                defaultValues={OrderCloseDefaultValues}
                mode="onChange"
            >
                <DocsList />

                <InputFactory
                    label="Сумма контракта:"
                    required
                    name="total"
                    type="number"
                />

                <Button
                    variant="contained"
                    color="secondary"
                    sx={styles.btn}
                    type="submit"
                    loading={isPending}
                >
                    Закрыть заявку
                </Button>
            </FormContainer>
        </Box>
    );
};
