// widgets/select-form-type/ui/SelectFormTypeWidget.tsx
import {Box, Stack, Typography} from '@mui/material';
import {FormTypeCards} from '../../feature/FormTypeCards';

export const SelectFormTypeWidget = () => (
    <Box display="flex" justifyContent="center" alignItems="center">
        <Stack gap={3} width="100%">
            <Typography variant="h6" textAlign="center">
                Выберите форму оказания услуг
            </Typography>
            <FormTypeCards />
        </Stack>
    </Box>
);
