import {NavLayout} from '../layouts/NavLayout';
import {Helmet} from 'react-helmet-async';
import ProfileLayout from '../layouts/ProfileLayout';
import {BackLayout} from '../layouts/BackLayout';
import {StatisticPanel} from '../../widgets/StatisticPanel';
import {stats_data} from './data';
import {Box} from '@mui/material';
import {useStyles} from './styles';

/**
 * Страница статистики
 */
const StatsPage = () => {
    const styles = useStyles();

    return (
        <>
            <Helmet>
                <title>Профиль</title>
            </Helmet>
            <ProfileLayout>
                <NavLayout>
                    <BackLayout title="Статистика">
                        <Box sx={styles.container}>
                            <StatisticPanel stats={stats_data} />
                        </Box>
                    </BackLayout>
                </NavLayout>
            </ProfileLayout>
        </>
    );
};

export default StatsPage;
