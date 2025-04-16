import {zodResolver} from '@hookform/resolvers/zod';
import {Button} from '@mui/material';
import {FC, useState} from 'react';
import {FormContainer} from 'react-hook-form-mui';

import {toast} from 'react-toastify';
import {useStyles} from './styles';
import InputFactory from '../../feature/InputFactory';
import {UploadFileWithLabel} from '../../shared/ui/UploadFile/UploadFileWithLabel/UploadFileWithLabel';
import {OrderCloseData, orderCloseSchema} from './schema';
import {OrderCloseDefaultValues} from './data';

/**
 * Форма закрытия заявки
 */
export const OrderCloseForm: FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    const styles = useStyles();

    /**
     * Вход по логину
     */
    const onSubmit = async (formData: Required<OrderCloseData>) => {
        try {
            setIsLoading(true);
        } catch (error) {
            const message = error?.response?.data?.message;

            toast.error(message || 'Ошибка авторизации');
        }

        setIsLoading(false);
    };

    return (
        <FormContainer
            onSuccess={onSubmit}
            resolver={zodResolver(orderCloseSchema)}
            defaultValues={OrderCloseDefaultValues}
            mode="onChange"
        >
            <UploadFileWithLabel
                name="files.registrationDoc"
                label="Можно загрузить изображение в формате jpg, png."
                error={''}
            />

            <InputFactory
                label="Сумма контракта:"
                required
                name="total"
                errorText=""
            />

            <Button
                variant="contained"
                color="secondary"
                sx={styles.btn}
                type="submit"
                loading={isLoading}
            >
                Закрыть заявку
            </Button>
        </FormContainer>
    );
};
