import {FC, ReactNode} from 'react';
import {Box} from '@mui/material';
import {PageTitle} from '../../../feature/PageTitle';
import {useStyles} from './styles';

type BackLayoutProfileProps = {
    title?: string;
    children: ReactNode;
};

/**
 * Добавляет сверху кнопку "назад" - специально для профиля
 */
export const BackLayoutProfile: FC<BackLayoutProfileProps> = ({
    title,
    children,
}) => {
    const styles = useStyles();

    return (
        <Box sx={styles.pageContainer}>
            {title && <PageTitle title={title} sx={styles.title} />}
            <Box sx={styles.content}>{children}</Box>
        </Box>
    );
};
