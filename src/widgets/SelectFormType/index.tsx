// widgets/select-form-type/ui/SelectFormTypeWidget.tsx
import {Box, Stack, Typography} from '@mui/material';
import {FormTypeCards} from '../../feature/FormTypeCards';

export const SelectFormTypeWidget = () => (
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100dvh"
    >
        <Stack gap={3} width={300}>
            <Typography variant="h6" textAlign="center">
                Выберите форму оказания услуг
            </Typography>
            <FormTypeCards />
        </Stack>
    </Box>
);
