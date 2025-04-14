import {RegistrationFormData} from './schema';

export const registrationFormData = [
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
        label: 'Пароль',
        name: 'password',
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

export const registrationFormDefaultValues: RegistrationFormData = {
    name: '',
    phone: '',
    email: '',
    experience: '',
    about: '',
    files: [],
    consent: false,
};
