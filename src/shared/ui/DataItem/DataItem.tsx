import {Box, Stack, Typography} from '@mui/material';
import {useStyles} from './styles';

type DataItemProps = {
    label: string;
    value: string;
    hasUnderline: boolean;
};

/**
 * Отображение какой-то информации в строку
 */
export const DataItem = ({label, value, hasUnderline}: DataItemProps) => {
    const styles = useStyles();

    return (
        <Box>
            <Stack
                direction="row"
                justifyContent="space-between"
                px={2}
                py={1.5}
                sx={hasUnderline ? styles.root_with_underline : styles.root}
            >
                <Typography sx={styles.text}>
                    <strong>{label}</strong>
                </Typography>
                <Typography sx={styles.text}>{value}</Typography>
            </Stack>
        </Box>
    );
};
