import {Box, Container, Paper} from '@mui/material';
import {Outlet} from 'react-router-dom';
import {useStyles} from './styles';
import {Navbar} from '../../../widgets/Navbar';
import {ReactNode} from 'react';

type NavLayoutProps = {
    children: ReactNode;
};

/**
 * Шаблон для того, чтобы показывать навигацию
 */
export const NavLayout = ({children}: NavLayoutProps) => {
    const styles = useStyles();

    return (
        <Box sx={styles.layout}>
            {children}
            <Paper sx={styles.navigation} elevation={0}>
                <Navbar />
            </Paper>
        </Box>
    );
};
