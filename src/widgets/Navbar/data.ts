import {SlugPages} from '../../app/routes/pages';

export const menuItems = [
    {
        href: '/orders',
        title: 'Мои вызовы',
        icon: {
            url: '/icons/done.svg',
            activeUrl: '/icons/done_active.svg',
            size: 33,
        },
    },
    {
        href: '/',
        title: 'Главная',
        icon: {
            url: '/icons/recycled_water.svg',
            activeUrl: '/logo_icon.png',
            size: 28,
        },
    },
    {
        href: '/profile',
        title: 'Профиль',
        avaiableHref: [
            SlugPages.SETTINGS,
            SlugPages.STATISTICS,
            SlugPages.MY_DOCUMENTS,
        ],
        icon: {
            url: '/icons/user.svg',
            activeUrl: '/icons/user_active.svg',
            size: 27,
        },
    },
];
