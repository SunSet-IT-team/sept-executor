import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Link} from 'react-router-dom';
import type {ReactNode} from 'react';
import {useStyles} from './styles';

interface SidebarItemProps {
    icon: ReactNode;
    label: string;
    to: string;
}

/**
 * Кнопка с экрана Личный кабинет: Профиль
 */
export const ProfileFeatureItem = ({icon, label, to}: SidebarItemProps) => {
    const styles = useStyles();

    return (
        <ListItem component={Link} to={to} sx={styles.container}>
            <ListItemIcon sx={styles.icon}>{icon}</ListItemIcon>
            <ListItemText primary={label} />
        </ListItem>
    );
};
