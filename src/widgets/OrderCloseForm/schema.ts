import {z} from 'zod';

export const orderCloseSchema = z.object({
    total: z
        .number({
            required_error: 'Поле обязательно для заполнения',
            invalid_type_error: 'Введите число',
        })
        .min(10, {message: 'Минимальное значение — 10'}),

    files: z
        .array(z.union([z.instanceof(File), z.null()]))
        .min(1, {message: 'Загрузите хотя бы один файл'})
        .max(5, {message: 'Максимум 5 файлов'}),
});

export type OrderCloseData = z.infer<typeof orderCloseSchema>;
