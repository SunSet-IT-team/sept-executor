import {Button} from '@mui/material';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import { SlugPages } from '../../app/routes/pages';

/**
 * Кнопка техподдержки.
 * Экран - Личный профиль: Профиль.
 */
export const TechSupportBtn = () => {
    const styles = useStyles()

    return <Button
        variant="contained"
        fullWidth
        sx={styles.root}
        component={Link}
        to={`/${SlugPages.SUPPORT}`}
    >
        Техподдержка
    </Button>
}
