import {
    Stack,
    Typography,
    Rating,
    Divider,
    TextField,
    Box,
} from '@mui/material';
import {FC} from 'react';
import {useStyles} from './styles';

interface IProps {
    ratingScore: number;
    reviewText: string;
    name?: string;
}

/**
 * Нижняя часть карточки отзыва с рейтингом и текстом отзыва.
 * Экран - Личный кабинет: мои отзывы.
 */
export const ReviewContent: FC<IProps> = ({ratingScore, reviewText, name}) => {
    const styles = useStyles();

    return (
        <Box>
            {/* Заголовок и рейтинг */}
            <Stack direction="row" sx={styles.scoreContainer}>
                <Typography sx={styles.label}>{name || 'Аноним'}</Typography>
                <Rating readOnly value={ratingScore} />
            </Stack>

            {/* Линия под заголовком */}
            <Divider color="#000" sx={styles.underline} />

            {/* Текст отзыва */}
            <TextField
                fullWidth
                multiline
                rows={4}
                variant="standard"
                defaultValue={reviewText}
                sx={styles.textField}
                slotProps={{input: {disableUnderline: true, readOnly: true}}}
            />
        </Box>
    );
};
