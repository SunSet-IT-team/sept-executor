import {z} from 'zod';
import {
    cleanPhoneNumber,
    onlyDigitsRegex,
    phoneRegex,
} from '../../shared/utils/regex';

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
    city: z.string().min(1, 'Обязательное поле'),
    about: z.string().min(1, 'Обязательное поле'),
    files: z.array(z.any()).length(3, 'Необходимо загрузить все 3 файла'),
    consent: z.boolean().refine((value) => value === true, {
        message: 'Поле обязательно для заполнения',
    }),
    password: z.string().min(1, {message: 'Поле обязательно для заполнения'}),
});

export type RegistrationFormData = z.infer<typeof registrationFormSchema>;
