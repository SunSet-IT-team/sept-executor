import {FC, ReactNode} from 'react';
import {Box} from '@mui/material';
import {PageTitle} from '../../../feature/PageTitle';
import {useStyles} from './styles';

type BackLayoutProps = {
    title?: string;
    children: ReactNode;
};

export const BackLayout: FC<BackLayoutProps> = ({title, children}) => {
    const styles = useStyles();

    return (
        <Box sx={styles.pageContainer}>
            {title && <PageTitle title={title} sx={styles.title} />}
            <Box sx={styles.content}>{children}</Box>
        </Box>
    );
};
