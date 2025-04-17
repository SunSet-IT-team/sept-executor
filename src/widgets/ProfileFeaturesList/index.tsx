import { ProfileFeatureItem } from '../../feature/ProfileFeatureItem';
import {Grid, useMediaQuery} from '@mui/material';
import {menuItems} from './data';
import {useStyles} from './styles';

/**
 * Список кнопок в меню профиля.
 * Экран - Личный кабинет: Профиль
 */
export const ProfileFeaturesList = () => {
    const styles = useStyles();
    const isSmallScreen = useMediaQuery('(max-width:389.98px)');

    return (
        <Grid
            container
            rowSpacing={'13px'}
            columnSpacing={'10px'}
            sx={styles.container}
        >
            {menuItems.map((item) => (
                <Grid size={isSmallScreen ? 12 : 6} key={item.label}>
                    <ProfileFeatureItem
                        icon={item.icon}
                        label={item.label}
                        to={item.to}
                    />
                </Grid>
            ))}
        </Grid>
    );
};
