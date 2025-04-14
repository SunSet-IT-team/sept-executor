import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Link} from 'react-router-dom';
import type {ReactNode} from 'react';
import {useStyles} from './styles';

interface SidebarItemProps {
    icon: ReactNode;
    text: string;
    to: string;
}

export const ProfileFeatureItem = ({icon, text, to}: SidebarItemProps) => {
    const styles = useStyles();

    return (
        <ListItem component={Link} to={to} sx={styles.container}>
            <ListItemIcon sx={{justifyContent: 'center'}}>{icon}</ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
    );
};
