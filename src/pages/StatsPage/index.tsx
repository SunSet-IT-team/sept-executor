import {NavLayout} from '../layouts/NavLayout';
import {Helmet} from 'react-helmet-async';
import ProfileLayout from '../layouts/ProfileLayout';
import { useStyles } from './styles';
import { BackLayout } from '../layouts/BackLayout';
import { StatisticPanel } from '../../widgets/StatisticPanel';

/**
 * Страница статистики
 */
const StatsPage = () => {
    const styles = useStyles()
    return (
        <>
            <Helmet>
                <title>Профиль</title>
            </Helmet>
            <ProfileLayout>
                <NavLayout>
                    <BackLayout title='Статистика'>
                      <StatisticPanel/>
                    </BackLayout> 
                </NavLayout>
            </ProfileLayout>
        </>
    );
};

export default StatsPage;
