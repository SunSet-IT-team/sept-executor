import { Typography } from "@mui/material";

interface IProps {
    title: string;
    value: string;
}

export const StatsBlockItem = ({title, value}: IProps) => {
    return (
        <Typography
            sx={{
                p: '20px',
                border: '1px solid',
                borderRadius: '20px',
                borderColor: 'primary.main',
                flex: "1 1 auto",
                textAlign: "center"
            }}
        >
            {`${title}: ${value}`}
        </Typography>
    );
};
