import {Avatar, Box, Stack, Typography} from '@mui/material';
import {useStyles} from './styles';
import RatingBadge from '../../feature/RatingBadge';
import {Executor} from '../../entities/user/model/types';

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
                <RatingBadge
                    rate={interlocutor.rating.value}
                    qty={interlocutor.rating.count}
                />
            </Stack>
        </Box>
    );
};

export default ProfileUp;
