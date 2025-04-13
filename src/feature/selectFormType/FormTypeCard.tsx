import {Button, Stack} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const types = [
    {label: 'Юридическое лицо', value: 'legal'},
    {label: 'ИП', value: 'entrepreneur'},
    {label: 'Частное лицо', value: 'individual'},
];

export const FormTypeCard = () => {
    const navigate = useNavigate()

    const handleSelect = (type: string) => {
        /**
         * @todo: dispatch в стор или navigate
         */
        console.log('Selected type:', type);
        navigate('../collect-info', {relative: 'path'});
    };

    return (
        <Stack gap={2}>
            {types.map((type) => (
                <Button
                    key={type.value}
                    variant="contained"
                    sx={{backgroundColor: '#ddd', color: '#000', py: 2}}
                    onClick={() => handleSelect(type.value)}
                >
                    {type.label}
                </Button>
            ))}
        </Stack>
    );
};
