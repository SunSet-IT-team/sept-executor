import {Box, Stack, SxProps, Typography} from '@mui/material';
import { StatsBlockItem } from './StatsBlockItem';
import { Theme } from '@emotion/react';

interface IProps {
    title: string;
    callsAmoute: string;
    closedAmoute: string;
    rejectedAmoute: string;
    sx?: SxProps<Theme>
}

export const StatsBlock: React.FC<IProps> = ({title, callsAmoute, closedAmoute, rejectedAmoute, sx}) => {
    return (
        <Box sx={sx}>
            <Typography sx={{textAlign: 'center', mb: '25px', fontWeight: 700}}>
                {title}
            </Typography>
            <Stack direction={"row"} spacing={2} sx={{
              width: "100%"
            }}>
                <StatsBlockItem title="Вызовы" value={callsAmoute} />
                <StatsBlockItem title="Закрыто" value={closedAmoute} />
                <StatsBlockItem title="Отказ" value={rejectedAmoute} />
            </Stack>
        </Box>
    );
};
