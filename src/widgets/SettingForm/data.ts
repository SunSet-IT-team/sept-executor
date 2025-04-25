import {SettingFormData} from './schema';

export const settingFormData = [
    {
        label: 'Наименование',
        name: 'name',
        required: true,
        errorText: 'Поле обязательно для заполнения',
    },

    {
        label: 'Телефон',
        name: 'phone',
        required: true,
        errorText: 'Поле обязательно для заполнения',
    },
    {
        label: 'Email',
        name: 'email',
        required: true,
        errorText: 'Поле обязательно для заполнения',
    },
    {
        label: 'Опыт работы',
        name: 'experience',
        required: true,
        errorText: 'Поле обязательно для заполнения',
    },
    {
        label: 'Город',
        name: 'city',
        required: true,
        errorText: 'Поле обязательно для заполнения',
    },

    {
        label: 'Новый пароль',
        name: 'newPassword',
        required: true,
        errorText: 'Поле обязательно для заполнения',
        type: 'password',
    },

    {
        label: 'О компании',
        name: 'about',
        required: true,
        errorText: 'Поле обязательно для заполнения',
    },
];

export const settingFormDefaultValues: SettingFormData = {
    name: '',
    phone: '',
    email: '',
    experience: 0,
    about: '',
    city: '',
    newPassword: '',
    profileImage: undefined as unknown as File, // заглушка
};
