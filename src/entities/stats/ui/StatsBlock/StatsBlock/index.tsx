import {Box, Stack, SxProps, Typography, useMediaQuery} from '@mui/material';
import {StatsBlockItem} from '../StatsBlockItem';
import {Theme} from '@emotion/react';
import {useStyles} from './styles';

interface IProps {
    title: string;
    callsAmoute: string | number;
    closedAmoute: string | number;
    rejectedAmoute: string | number;
    sx?: SxProps<Theme>;
}

export const StatsBlock: React.FC<IProps> = ({
    title,
    callsAmoute,
    closedAmoute,
    rejectedAmoute,
    sx,
}) => {
    const styles = useStyles();
    const isSmallScreen = useMediaQuery('(max-width:389.98px)');

    return (
        <Box sx={sx}>
            <Typography sx={styles.title}>{title}</Typography>
            <Stack
                direction={isSmallScreen ? 'column' : 'row'}
                spacing={2}
                sx={styles.rowContainer}
            >
                <StatsBlockItem title="Вызовы" value={callsAmoute} />
                <StatsBlockItem title="Закрыто" value={closedAmoute} />
                <StatsBlockItem title="Отказ" value={rejectedAmoute} />
            </Stack>
        </Box>
    );
};
