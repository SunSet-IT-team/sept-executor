import {ProfileFeatureItem} from '../../feature/ProfileFeatureItem';
import {Grid} from '@mui/material';
import {menuItems} from './data';
import {useStyles} from './styles';

/**
 * Список кнопок в меню профиля.
 * Экран - Личный кабинет: Профиль
 */
export const ProfileFeaturesList = () => {
    const styles = useStyles();

    return (
        <Grid
            container
            rowSpacing={'13px'}
            columnSpacing={'10px'}
            sx={styles.container}
        >
            {menuItems.map((item) => (
                <Grid size={6} key={item.label}>
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
