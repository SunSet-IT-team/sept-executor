import {Button} from '@mui/material';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

export const TechSupportBtn = () => {
    const styles = useStyles()

    return <Button
        variant="contained"
        fullWidth
        sx={styles.root}
        component={Link}
        to={"#"}
    >
        Техподдержка
    </Button>
}
