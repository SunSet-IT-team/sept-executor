import {Stack} from '@mui/material';
import {UploadFileWithLabel} from '../../../shared/ui/UploadFile/UploadFileWithLabel/UploadFileWithLabel';
import {useFieldArray, useFormContext} from 'react-hook-form-mui';
import {useEffect} from 'react';

const DocsList = () => {
    const {control, watch, formState} = useFormContext();

    const {fields, append} = useFieldArray<any>({
        control,
        name: 'files',
    });

    const files = watch('files');

    // Добавляем новое поле, если последнее уже заполнено
    useEffect(() => {
        const allFilled = files.every(
            (file: File | null) => file instanceof File
        );

        if (allFilled && files.length < 5) {
            append(null); // добавим новое пустое поле
        }
    }, [files.filter((el: any) => el).length]);

    return (
        <Stack spacing={4} sx={{mb: 4}}>
            {fields.map((field, index) => (
                <UploadFileWithLabel
                    key={field.id}
                    accept=".jpg,.jpeg,.png,.gif,.webp,.heic,.pdf,.xls,.xlsx,.doc,.docx"
                    name={`files.${index}`}
                    label={
                        files[index]?.name
                            ? files[index]?.name
                            : 'Можно загрузить изображение в формате jpg, png.'
                    }
                    error={formState.errors?.files?.[index]?.message || ''}
                />
            ))}
        </Stack>
    );
};

export default DocsList;
