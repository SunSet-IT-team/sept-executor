import {
    Stack,
    Typography,
    Button,
    Rating,
    Divider,
    TextField,
    Box,
} from '@mui/material';
import {FC} from 'react';
import {textFieldSx} from './styles';

interface IProps {
    rating_score: number;
    review_text: string;
}

export const OrderReviewShort: FC<IProps> = ({rating_score, review_text}) => {
    return (
        <Box>
            {/* Заголовок и рейтинг */}
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mt={'35px'}
                mb={1}
            >
                <Typography fontWeight={600}>Мой отзыв</Typography>
                <Rating readOnly value={я} />
            </Stack>

            {/* Линия под заголовком */}
            <Divider color="#000" sx={{mb: '10px'}} />

            <TextField
                fullWidth
                multiline
                rows={4}
                variant="standard"
                defaultValue={review_text}
                sx={textFieldSx}
                slotProps={{input: {disableUnderline: true, readOnly: true}}}
            />
        </Box>
    );
};
