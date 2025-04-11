import {Box, Container} from '@mui/material';
import {Outlet} from 'react-router-dom';
import {useStyles} from './styles';
import {Navbar} from '../../../widgets/Navbar';

/**
 * Шаблон для того, чтобы показывать навигацию
 */
export const NavLayout = () => {
    const styles = useStyles();

    return (
        <div className="app">
            <Container maxWidth="lg" sx={styles.container}>
                <Box className="main" component="main" sx={styles.content}>
                    <Outlet />
                </Box>
                <Navbar />
            </Container>
        </div>
    );
};
