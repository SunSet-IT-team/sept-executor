import {Stack, Typography, Box} from '@mui/material';
import {UploadFileWithLabel} from '../../../../shared/ui/UploadFile/UploadFileWithLabel/UploadFileWithLabel';
import {useStyles} from './styles';
import {useFormContext} from 'react-hook-form-mui';

/**
 * Блок загрузок фотографий
 */
export const FileUploadsBlock = () => {
    const styles = useStyles();
    const {
        formState: {errors},
    } = useFormContext();

    const filesError = errors.files;

    return (
        <Box>
            <Stack direction="column" sx={styles.container}>
                <UploadFileWithLabel
                    name="files"
                    index={0}
                    label="Фото профиля"
                />
                <UploadFileWithLabel
                    name="files"
                    index={1}
                    label="Свидетельство о регистрации юридического лица"
                />
                <UploadFileWithLabel
                    name="files"
                    index={2}
                    label="Разрешение на осуществление деятельности"
                />
            </Stack>

            {filesError && (
                <Typography color="error" sx={styles.errMsg}>
                    {filesError.message as string}
                </Typography>
            )}
        </Box>
    );
};
