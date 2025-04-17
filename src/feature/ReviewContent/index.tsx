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
    rating_score: number;
    review_text: string;
}

/**
 * Нижняя часть карточки отзыва с рейтингом и текстом отзыва.
 * Экран - Личный кабинет: мои отзывы.
 */
export const ReviewContent: FC<IProps> = ({rating_score, review_text}) => {
    const styles = useStyles();

    return (
        <Box>
            {/* Заголовок и рейтинг */}
            <Stack direction="row" sx={styles.scoreContainer}>
                <Typography sx={styles.label}>Отзыв</Typography>
                <Rating readOnly value={rating_score} />
            </Stack>

            {/* Линия под заголовком */}
            <Divider color="#000" sx={styles.underline} />

            {/* Текст отзыва */}
            <TextField
                fullWidth
                multiline
                rows={4}
                variant="standard"
                defaultValue={review_text}
                sx={styles.textField}
                slotProps={{input: {disableUnderline: true, readOnly: true}}}
            />
        </Box>
    );
};
