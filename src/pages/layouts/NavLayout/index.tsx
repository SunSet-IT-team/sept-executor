import {Box, Container, Paper} from '@mui/material';
import {Outlet} from 'react-router-dom';
import {useStyles} from './styles';
import {Navbar} from '../../../widgets/Navbar';

/**
 * Шаблон для того, чтобы показывать навигацию
 */
export const NavLayout = () => {
    const styles = useStyles();

    return (
        <Box sx={location.pathname.includes('profile') ? {} : styles.layout}>
            <Outlet />
            <Paper sx={styles.navigation} elevation={0}>
                <Navbar />
            </Paper>
        </Box>
    );
};
