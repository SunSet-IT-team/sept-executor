import {Stack, Typography, Box} from '@mui/material';
import {UploadFileWithLabel} from '../../../../shared/ui/UploadFile/UploadFileWithLabel/UploadFileWithLabel';
import {useStyles} from './styles';
import {FieldError, useFormContext} from 'react-hook-form-mui';

/**
 * Блок загрузок фотографий
 */
export const FileUploadsBlock = () => {
    const styles = useStyles();
    const {
        formState: {errors},
    } = useFormContext<{
        files?: {
            profilePhoto?: FieldError;
            registrationDoc?: FieldError;
            licenseDoc?: FieldError;
        };
    }>();

    const profilePhotoError =
        (errors.files?.profilePhoto?.message as string) || '';
    const registrationDocError =
        (errors.files?.registrationDoc?.message as string) || '';
    const licenseDocError = (errors.files?.licenseDoc?.message as string) || '';

    return (
        <Box>
            <Stack direction="column" sx={styles.container}>
                <UploadFileWithLabel
                    name="files.profilePhoto"
                    label="Фото профиля"
                    error={profilePhotoError}
                />
                <UploadFileWithLabel
                    name="files.registrationDoc"
                    label="Свидетельство о регистрации юридического лица"
                    error={registrationDocError}
                />
                <UploadFileWithLabel
                    name="files.licenseDoc"
                    label="Разрешение на осуществление деятельности"
                    error={licenseDocError}
                />
            </Stack>
        </Box>
    );
};
