import React, {useRef, useState} from 'react';
import {Box, SxProps} from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import {Theme} from '@emotion/react';
import {imgStyle, useStyles} from './styles';

interface IProps {
    onEdit?: (fileContent: string) => void;
    sx?: SxProps<Theme>;
}

export const UploadFile: React.FC<IProps> = ({onEdit, sx}) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setSelectedFile(file);

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
                onEdit(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleBoxClick = () => {
        fileInputRef.current?.click();
    };

    const styles = useStyles(sx);

    return (
        <Box sx={styles.rootContainer}>
            <Box onClick={handleBoxClick} sx={styles.container}>
                {preview ? (
                    <img src={preview} alt="Preview" style={imgStyle} />
                ) : (
                    <AddPhotoAlternateIcon sx={styles.imgIcon} />
                )}
            </Box>

            <input
                type="file"
                ref={fileInputRef}
                hidden
                accept="image/jpeg, image/png"
                onChange={handleFileChange}
            />
        </Box>
    );
};
