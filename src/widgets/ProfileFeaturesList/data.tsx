import {
    CheckCircleOutline as ReviewsIcon,
    InfoOutline as StatsIcon,
} from '@mui/icons-material';
import { StarIcon } from '../../shared/ui/icons/StarIcon';
import { DocumentAddIcon } from '../../shared/ui/icons/DocumentAddIcon';
import { SlugPages } from '../../app/routes/pages';

export const menuItems = [
    {
        icon: <ReviewsIcon />,
        label: 'Мои отзывы',
        to: `/${SlugPages.MY_REVIEWS}`,
    },
    {
        icon: <StatsIcon />,
        label: 'Статистика',
        to: `/${SlugPages.STATISTICS}`,
    },
    {
        icon: <StarIcon />,
        label: 'Настройки',
        to: `/${SlugPages.SETTINGS}`,
    },
    {
        icon: <DocumentAddIcon />,
        label: 'Мои документы',
        to: `/${SlugPages.MY_DOCUMENTS}`,
    },
];
