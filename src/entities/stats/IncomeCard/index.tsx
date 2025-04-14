import { Theme } from "@emotion/react";
import { Stack, SxProps, Typography } from "@mui/material";

interface IncomeCardProps {
    incomeForMonth: string
    incomeTotal: string
    sx?: SxProps<Theme>
}

export const IncomeCard: React.FC<IncomeCardProps> = ({
    incomeForMonth,
    incomeTotal,
    sx
}) => {
    return (
        <Stack
            direction={'row'}
            spacing={2}
            sx={{
                p: '25px 35px',
                border: '1px solid',
                borderRadius: '20px',
                borderColor: 'primary.main',
                ...sx
            }}
        >
            <Stack
                direction={'column'}
                spacing={'6px'}
                sx={{
                    flex: '1 1 auto',
                    textAlign: 'center',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '24px',
                    }}
                >
                    {incomeForMonth}
                </Typography>
                <Typography>доход за месяц</Typography>
            </Stack>
            <Stack
                direction={'column'}
                spacing={'6px'}
                sx={{
                    flex: '1 1 auto',
                    textAlign: 'center',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '24px',
                    }}
                >
                    {incomeTotal}
                </Typography>
                <Typography>доход за весь период</Typography>
            </Stack>
        </Stack>
    );
};
