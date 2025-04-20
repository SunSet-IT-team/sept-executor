import {FC} from 'react';
import {Avatar, Box, Stack, Typography} from '@mui/material';
import {imageStyle, useStyles} from './styles';

interface IProps {
    avatarUrl: string;
    customerName: string;
    orderDate: string;
    orderAddress: string;
}

/**
 * Верхняя часть карточки отзыва пользователя небольшой с информацией о заказе
 * Экран - Личный кабинет: мои отзывы.
 */
export const ReviewTopInfo: FC<IProps> = ({
    avatarUrl,
    customerName,
    orderDate,
    orderAddress,
}) => {
    const styles = useStyles();

    return (
        <Stack direction="row" spacing={2} alignItems="flex-start">
            {/* Левая часть — аватар */}
            <Box sx={styles.imageContainerStyle}>
                <Avatar sx={imageStyle} src={avatarUrl} alt={customerName} />
            </Box>

            {/* Правая часть — текст */}
            <Box>
                <Typography sx={styles.label}>{customerName}</Typography>
                <Typography>
                    <Box component="span" sx={styles.label}>
                        Дата:
                    </Box>
                    {` ${orderDate}`}
                </Typography>
                {orderAddress && (
                    <Typography>
                        <Box component="span" sx={styles.label}>
                            Адрес:
                        </Box>
                        {` ${orderAddress}`}
                    </Typography>
                )}
            </Box>
        </Stack>
    );
};
