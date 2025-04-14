import {Box, Typography} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import {useStyles} from './styles';

type RatingBadgeProps = {
    rate: number;
    qty: number;
};

/**
 * Шаблон вывода информации об рейтинге
 */
const RatingBadge = ({rate, qty}: RatingBadgeProps) => {
    const styles = useStyles();

    return (
        <Box sx={styles.container}>
            <StarIcon sx={styles.starIcon} />
            <Typography variant="body2" sx={styles.rate}>
                {rate}
            </Typography>
            <Typography variant="body2" sx={styles.qty}>
                {qty} оценок
            </Typography>
        </Box>
    );
};

export default RatingBadge;
