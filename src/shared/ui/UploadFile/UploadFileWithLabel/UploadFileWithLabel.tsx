import {Stack, SxProps, Typography} from '@mui/material';
import {ComponentProps, FC} from 'react';
import {UploadFile} from '..';
import {Theme} from '@emotion/react';
import {labelStyles, useStyles} from './styles';
import {Controller, useFormContext} from 'react-hook-form-mui';

interface IProps extends ComponentProps<typeof UploadFile> {
    name: string;
    index: number;
    label: string;
    uploadFileSx?: SxProps<Theme>;
}

/**
 * Отображение загрузки картинки вместе с текстом
 */
export const UploadFileWithLabel: FC<IProps> = ({
    label,
    sx,
    uploadFileSx,
    index,
    name,
}) => {
    const {control} = useFormContext();
    const styles = useStyles(sx, uploadFileSx);

    return (
        <Controller
            name={name}
            control={control}
            render={({field}) => {
                const handleChange = (fileContent: string) => {
                    const newFiles = [...(field.value || [])];
                    newFiles[index] = fileContent;
                    field.onChange(newFiles);
                };

                return (
                    <Stack direction={'row'} spacing={2} sx={styles.container}>
                        <UploadFile
                            sx={styles.uploadFile}
                            onEdit={handleChange}
                        />
                        <Typography sx={styles.labelContainer}>
                            <span style={labelStyles}>{label}</span>
                        </Typography>
                    </Stack>
                );
            }}
        />
    );
};
