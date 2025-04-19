import {Box, Button} from '@mui/material';
import {Helmet} from 'react-helmet-async';
import {BackLayout} from '../layouts/BackLayout';
import {PhotoBlock} from './components/PhotoBlock';
import {SettingsBlock} from './components/SettingsBlock';
import {useState} from 'react';

/**
 * Страница со всеми настройками
 */
const SettingPage = () => {
    const [saveDisabled, setSaveDisabled] = useState(true);

    const handleSave = () => {
        setSaveDisabled(true);
    };
    return (
        <>
            <Helmet>
                <title>Настройки</title>
            </Helmet>
            <BackLayout title="Настройки">
                <Box sx={{mb: 4, mt: 6}}>
                    <SettingsBlock onEdit={() => setSaveDisabled(false)} />
                </Box>

                <Box sx={{mb: 4}}>
                    <PhotoBlock onEdit={() => setSaveDisabled(false)} />
                </Box>

                <Button
                    variant="contained"
                    size="large"
                    disabled={saveDisabled}
                    onClick={handleSave}
                    fullWidth
                >
                    Сохранить изменения
                </Button>
            </BackLayout>
        </>
    );
};

export default SettingPage;
