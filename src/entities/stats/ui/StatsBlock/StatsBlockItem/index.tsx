import {Typography} from '@mui/material';
import {useStyles} from './styles';

interface IProps {
    title: string;
    value: string | number;
}

export const StatsBlockItem = ({title, value}: IProps) => {
    const styles = useStyles();
    return <Typography sx={styles.root}>{`${title}: ${value}`}</Typography>;
};
