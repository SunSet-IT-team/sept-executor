import React, {useState} from 'react';
import {
    LinearProgress,
    Box,
    Typography,
    Paper,
    Stack,
    IconButton,
} from '@mui/material';
import {InsertDriveFile, Close} from '@mui/icons-material';
import api from '../../api';
import {UploadFileDTO} from '../../api/dto';

type FileUploaderProps = {
    /**
     * Ссылка на инпут
     */
    fileInputRef: React.RefObject<HTMLInputElement>;

    /**
     * Файл
     */
    file: File | null;

    /**
     * Обработчик для установки файла
     */
    setFile: (file: File | null) => void;

    /**
     * Колбек при начале загрузки
     */
    onStartUpload?: () => void;

    /**
     * Колбек при успешной загрузке
     */
    onSuccessUpload?: (ans: UploadFileDTO) => void;

    /**
     * Колбек при удалении файла
     */
    onDelete?: () => void;
};

/**
 * Загрузчик файлов
 */
const FileUploader = ({
    fileInputRef,
    onStartUpload,
    onSuccessUpload,
    onDelete,
    setFile,
    file,
}: FileUploaderProps) => {
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadComplete, setUploadComplete] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
            onStartUpload();
            setUploadComplete(false);
            handleUpload(event.target.files[0]);
        }
    };

    const handleUpload = async (file: File | null) => {
        if (!file) return;

        const formData = new FormData();
        formData.append('files', file);

        setIsUploading(true);
        setUploadProgress(0);

        try {
            const res = await api.post('/files/upload', formData, {
                headers: {'Content-Type': 'multipart/form-data'},

                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round(
                        (progressEvent.loaded * 100) /
                            (progressEvent.total || 1)
                    );
                    setUploadProgress(percentCompleted);
                },
            });

            onSuccessUpload(res.data);

            setUploadComplete(true);
        } catch (error) {
            console.error('Ошибка загрузки:', error);
        } finally {
            setIsUploading(false);
        }
    };

    const handleRemoveFile = () => {
        setFile(null);
        setUploadComplete(false);
        setUploadProgress(0);
        onDelete();
    };

    return (
        <Paper elevation={3} sx={{p: 3, maxWidth: 500}}>
            <Stack spacing={3}>
                <input
                    accept="*/*"
                    style={{display: 'none'}}
                    id="file-upload"
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                />

                {file && (
                    <Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Box display="flex" alignItems="center">
                                <InsertDriveFile color="primary" sx={{mr: 1}} />
                                <Typography variant="body1">
                                    {file.name}
                                </Typography>
                            </Box>
                            <IconButton onClick={handleRemoveFile} size="small">
                                <Close fontSize="small" />
                            </IconButton>
                        </Box>

                        {isUploading && (
                            <LinearProgress
                                variant="determinate"
                                value={uploadProgress}
                                sx={{mt: 2}}
                            />
                        )}

                        {uploadComplete && (
                            <Typography color="success.main" sx={{mt: 1}}>
                                Файл успешно загружен!
                            </Typography>
                        )}
                    </Box>
                )}
            </Stack>
        </Paper>
    );
};

export default FileUploader;
