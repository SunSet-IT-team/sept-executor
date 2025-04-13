import {z} from 'zod';

export const phoneRegex =
    /(^8|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/;
export const onlyDigitsRegex = /^\+?\d+$/;

export const cleanPhoneNumber = (phone: string) => {
    return phone.replace(/[()\-\s]/g, ''); // Убираем скобки, дефисы и пробелы
};

export const registrationFormSchema = z.object({
    name: z.string().min(1, 'Обязательное поле'),
    phone: z
        .string()
        .min(1, {message: 'Поле обязательно для заполнения'})
        .transform(cleanPhoneNumber)
        .refine((phone) => onlyDigitsRegex.test(phone), {
            // Проверка, что номер состоит только из цифр
            message: 'Номер телефона должен содержать только цифры',
        })
        .refine((phone) => phoneRegex.test(phone), {
            message: 'Введите корректный российский номер телефона',
        }),
    email: z.string().email('Некорректный email'),
    experience: z.string().min(1, 'Обязательное поле'),
    about: z.string().min(1, 'Обязательное поле'),
    files: z.array(z.any()).length(3, 'Необходимо загрузить все 3 файла'),
    consent: z.boolean().refine((value) => value === true, {
        message: 'Поле обязательно для заполнения',
    }),
});

export const registrationForm_defaultValues: RegistrationFormData = {
    name: '',
    phone: '',
    email: '',
    experience: '',
    about: '',
    files: [],
    consent: false,
};

export type RegistrationFormData = z.infer<typeof registrationFormSchema>;
