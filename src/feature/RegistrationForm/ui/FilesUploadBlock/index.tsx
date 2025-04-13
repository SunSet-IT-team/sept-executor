import {Control, Controller} from 'react-hook-form';
import {Stack, Typography, Box} from '@mui/material';
import {UploadFileWithLabel} from '../../../../shared/ui/UploadFile/UploadFileWithLabel/UploadFileWithLabel';
import {FC} from 'react';
import {useStyles} from './styles';
import {RegistrationFormData} from '../../model/validation';

interface Props {
    control: Control<RegistrationFormData>;
}

export const FileUploadsBlock: FC<Props> = ({control}) => {
    const styles = useStyles();

    return (
        <Controller
            name="files"
            control={control}
            render={({field, fieldState}) => {
                const handleFileChange = (
                    index: number,
                    fileContent: string
                ) => {
                    const newFiles = [...field.value];
                    newFiles[index] = fileContent;
                    field.onChange(newFiles);
                };

                const hasError = !!fieldState.error;

                return (
                    <Box>
                        <Stack direction="column" sx={styles.container}>
                            <UploadFileWithLabel
                                label="Фото профиля"
                                onEdit={(file) => handleFileChange(0, file)}
                            />
                            <UploadFileWithLabel
                                label="Свидетельство о регистрации юридического лица"
                                onEdit={(file) => handleFileChange(1, file)}
                            />
                            <UploadFileWithLabel
                                label="Разрешение на осуществление деятельности"
                                onEdit={(file) => handleFileChange(2, file)}
                            />
                        </Stack>

                        {hasError && (
                            <Typography color="error" sx={styles.errMsg}>
                                {fieldState.error.message}
                            </Typography>
                        )}
                    </Box>
                );
            }}
        />
    );
};
