import {Box, Stack, Typography} from '@mui/material';
import {Helmet} from 'react-helmet-async';
import {BackLayoutProfile} from '../layouts/BackLayoutProfile';
import {NavLayout} from '../layouts/NavLayout';
import ProfileLayout from '../layouts/ProfileLayout';
import {useAppSelector} from '../../app/store/hook';
import {getCurrentUser} from '../../entities/user/model/selectors';
import FileDisplay from '../../shared/ui/FileDisplay';
import {useStyles} from './styles';

/**
 * Страница с документами
 */
const DocsPage = () => {
    const user = useAppSelector(getCurrentUser);

    const styles = useStyles();

    return (
        <>
            <Helmet>
                <title>Профиль</title>
            </Helmet>
            <ProfileLayout>
                <NavLayout>
                    <BackLayoutProfile title="Мои документы">
                        <Stack>
                            <Box sx={styles.docBlock}>
                                <Typography sx={styles.title}>
                                    Свидетельство о регистрации юридического
                                    лица
                                </Typography>
                                {user.registrationDoc ? (
                                    <FileDisplay
                                        fileUrl={user.registrationDoc}
                                    />
                                ) : (
                                    <Typography>Отсутствует</Typography>
                                )}
                            </Box>
                            <Box sx={styles.docBlock}>
                                <Typography sx={styles.title}>
                                    Разрешение на осуществление деятельности
                                </Typography>
                                {user.licenseDoc ? (
                                    <FileDisplay fileUrl={user.licenseDoc} />
                                ) : (
                                    <Typography>Отсутствует</Typography>
                                )}
                            </Box>
                        </Stack>
                    </BackLayoutProfile>
                </NavLayout>
            </ProfileLayout>
        </>
    );
};

export default DocsPage;
