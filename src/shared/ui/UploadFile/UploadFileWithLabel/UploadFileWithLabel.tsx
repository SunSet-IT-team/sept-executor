import {Stack, SxProps, Typography} from '@mui/material';
import {ComponentProps, FC} from 'react';
import {UploadFile} from '..';
import {Theme} from '@emotion/react';
import {labelStyles, useStyles} from './styles';

interface IProps extends ComponentProps<typeof UploadFile> {
    label: string;
    uploadFileSx?: SxProps<Theme>;
}

export const UploadFileWithLabel: FC<IProps> = ({
    onEdit,
    label,
    sx,
    uploadFileSx,
}) => {
    const styles = useStyles(sx, uploadFileSx);

    return (
        <Stack direction={'row'} spacing={2} sx={styles.container}>
            <UploadFile sx={styles.uploadFile} onEdit={onEdit} />
            <Typography sx={styles.labelContainer}>
                <span style={labelStyles}>{label}</span>
            </Typography>
        </Stack>
    );
};
