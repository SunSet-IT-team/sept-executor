import {ProfileFeatureItem} from '../../../feature/Profile/ProfileFeatureItem';
import {Grid} from '@mui/material';
import {menuItems} from './data';
import {item_size, useStyles} from './styles';

export const ProfileFeatures = () => {
    const styles = useStyles();

    return (
        <Grid
            container
            rowSpacing={'13px'}
            columnSpacing={'10px'}
            sx={styles.container}
        >
            {menuItems.map((item, index) => (
                <Grid size={item_size} key={index}>
                    <ProfileFeatureItem
                        icon={item.icon}
                        text={item.text}
                        to={item.to}
                    />
                </Grid>
            ))}
        </Grid>
    );
};
