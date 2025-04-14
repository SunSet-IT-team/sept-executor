import {Box} from '@mui/material';
import {ReactNode} from 'react';
import {useAppSelector} from '../../../app/store/hook';
import {getCurrentUser} from '../../../entities/user/model/selectors';
import ProfileUp from '../../../widgets/ProfileUp';
import {useStyles} from './styles';

type ProfileLayoutProps = {
    children: ReactNode;
};

/**
 * Шаблон отображения страницы вместе с информацией сверху о профиле
 */
const ProfileLayout = ({children}: ProfileLayoutProps) => {
    const styles = useStyles();
    const user = useAppSelector(getCurrentUser);

    return (
        <Box sx={styles.layout}>
            <ProfileUp interlocutor={user} />
            <Box sx={styles.content}>{children}</Box>
        </Box>
    );
};

export default ProfileLayout;
