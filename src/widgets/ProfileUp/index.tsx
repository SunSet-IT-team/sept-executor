import {Avatar, Box, Stack, Typography} from '@mui/material';
import {useStyles} from './styles';
import {Executor} from '../../entities/chats/model/types';
import RatingBadge from '../../feature/RatingBadge';

type ProfileUpProps = {
    interlocutor: Executor;
};

/**
 * Отображение верха профиля
 */
const ProfileUp = ({interlocutor}: ProfileUpProps) => {
    const styles = useStyles();

    return (
        <Box sx={styles.chatHeader}>
            <Stack sx={styles.chatHeaderUser}>
                <Avatar src="" alt="" sx={styles.chatHeaderUserImage} />
                <Typography sx={styles.chatHeaderUserName}>
                    {interlocutor.name}
                </Typography>
                <RatingBadge />
            </Stack>
        </Box>
    );
};

export default ProfileUp;
