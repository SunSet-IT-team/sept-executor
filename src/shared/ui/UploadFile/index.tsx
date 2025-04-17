import React, {useRef, useState} from 'react';
import {Box} from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import {imgStyle, useStyles} from './styles';

interface IProps {
    onEdit?: (file: File) => void;
    sx?: object;
    accept?: string; // Пример: "image/*,application/pdf"
}

export const UploadFile: React.FC<IProps> = ({
    onEdit,
    sx,
    accept = 'image/*,.heic',
}) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setSelectedFile(file);

        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => setPreview(reader.result as string);
            reader.readAsDataURL(file);
        } else {
            setPreview(null); // Не изображение — превью не нужно
        }

        onEdit(file);
    };

    const handleBoxClick = () => {
        fileInputRef.current?.click();
    };

    const styles = useStyles(sx);

    return (
        <Box sx={styles.rootContainer}>
            <Box onClick={handleBoxClick} sx={styles.container}>
                {selectedFile ? (
                    preview ? (
                        <img src={preview} alt="Preview" style={imgStyle} />
                    ) : (
                        <InsertDriveFileIcon sx={styles.imgIcon} />
                    )
                ) : (
                    <AddPhotoAlternateIcon sx={styles.imgIcon} />
                )}
            </Box>

            <input
                type="file"
                ref={fileInputRef}
                hidden
                accept={accept}
                onChange={handleFileChange}
            />
        </Box>
    );
};
