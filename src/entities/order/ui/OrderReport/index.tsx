import {Box, Grid, Typography} from '@mui/material';
import {ExecutorReport, Review} from '../../model/types';
import FileDisplay from '../../../../shared/ui/FileDisplay';

type OrderReportProps = {
    report: ExecutorReport;
};

/**
 * Отчёт по заказу
 */
const OrderReport = ({report}: OrderReportProps) => {
    return (
        <Box sx={{mb: 6}}>
            <Typography variant="h6" textAlign="center">
                Отчёт
            </Typography>
            <Grid container spacing={2} sx={{my: 4}}>
                {report.files.map((el) => (
                    <Grid key={el}>
                        <FileDisplay fileUrl={el} />
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h6">
                Сумма контракта: {report.total} руб.
            </Typography>
        </Box>
    );
};

export default OrderReport;
