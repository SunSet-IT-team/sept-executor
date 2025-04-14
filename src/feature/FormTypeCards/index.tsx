import {Button, Stack} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {ExecutorWorkFormat} from '../../entities/user/model/types';
import {mapExecutorTypeToLabel} from '../../entities/user/utils/formaters';
import {useAppDispatch} from '../../app/store/hook';
import {setWorkFormat} from '../../entities/user/model/slice';
import {SlugPages} from '../../app/routes/pages';

const types = Object.values(ExecutorWorkFormat);

/**
 * Форма выбора предпринимательства
 */
export const FormTypeCards = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleSelect = (type: ExecutorWorkFormat) => {
        dispatch(setWorkFormat(type));
        navigate(`/${SlugPages.REGISTER_COLLECT_INFO}`);
    };

    return (
        <Stack gap={2}>
            {types.map((type) => (
                <Button
                    key={type}
                    variant="contained"
                    sx={{backgroundColor: '#ddd', color: '#000', py: 2}}
                    onClick={() => handleSelect(type)}
                >
                    {mapExecutorTypeToLabel(type)}
                </Button>
            ))}
        </Stack>
    );
};
