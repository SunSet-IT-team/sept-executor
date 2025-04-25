import {z} from 'zod';
import {
    cleanPhoneNumber,
    onlyDigitsRegex,
    phoneRegex,
} from '../../shared/utils/regex';

export const settingFormSchema = z.object({
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
    experience: z.coerce
        .number()
        .int('Опыт должен быть целым числом')
        .nonnegative('Опыт не может быть отрицательным')
        .min(0, 'Минимальное значение - 0'),
    city: z.string().min(1, 'Обязательное поле'),
    about: z.string().min(1, 'Обязательное поле'),
    newPassword: z
        .string()
        .min(8, {message: 'Пароль должен содержать минимум 8 символов'})
        .optional()
        .or(z.literal('')),
    profileImage: z.instanceof(File, {
        message: 'Необходимо загрузить изображение',
    }),
});

export type SettingFormData = z.infer<typeof settingFormSchema>;
