import {NavLayout} from '../layouts/NavLayout';
import {Helmet} from 'react-helmet-async';
import ProfileLayout from '../layouts/ProfileLayout';
import {StatisticPanel} from '../../widgets/StatisticPanel';
import {Box, CircularProgress} from '@mui/material';
import {useStyles} from './styles';
import LoadPage from '../LoadPage';
import {StatsApi} from '../../entities/stats/api';
import {useState, useEffect} from 'react';
import {Stats} from '../../entities/stats/model/types';
import {BackLayoutProfile} from '../layouts/BackLayoutProfile';

/**
 * Страница статистики
 */
const StatsPage = () => {
    const [data, setData] = useState<Stats | false>(false);

    useEffect(() => {
        const f = async () => {
            const {data} = await StatsApi.getStats();
            setData(data.data);
        };

        f();
    }, []);

    const styles = useStyles();

    return (
        <>
            <Helmet>
                <title>Профиль</title>
            </Helmet>
            <ProfileLayout>
                <NavLayout>
                    <BackLayoutProfile title="Статистика">
                        <Box sx={styles.container}>
                            {data ? (
                                <StatisticPanel stats={data} />
                            ) : (
                                <CircularProgress
                                    size={64}
                                    thickness={4}
                                    sx={styles.loader}
                                />
                            )}
                        </Box>
                    </BackLayoutProfile>
                </NavLayout>
            </ProfileLayout>
        </>
    );
};

export default StatsPage;
