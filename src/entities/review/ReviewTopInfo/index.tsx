import {FC} from 'react';
import {Box, Stack, Typography} from '@mui/material';
import {imageStyle, useStyles} from './styles';

interface IProps {
    avatarUrl: string;
    customer_name: string;
    order_date: string;
    order_address: string;
}

/**
 * Верхняя часть карточки отзыва пользователя небольшой с информацией о заказе
 * Экран - Личный кабинет: мои отзывы.
 */
export const ReviewTopInfo: FC<IProps> = ({
    avatarUrl,
    customer_name,
    order_date,
    order_address,
}) => {
    const styles = useStyles();

    return (
        <Stack direction="row" spacing={2} alignItems="flex-start">
            {/* Левая часть — аватар */}
            <Box sx={styles.imageContainerStyle}>
                <img
                    src={avatarUrl}
                    alt={`Customer avatar`}
                    style={imageStyle}
                />
            </Box>

            {/* Правая часть — текст */}
            <Box>
                <Typography sx={styles.label}>{customer_name}</Typography>
                <Typography>
                    <Box component="span" sx={styles.label}>
                        Дата:
                    </Box>
                    {` ${order_date}`}
                </Typography>
                <Typography>
                    <Box component="span" sx={styles.label}>
                        Адрес:
                    </Box>
                    {` ${order_address}`}
                </Typography>
            </Box>
        </Stack>
    );
};
