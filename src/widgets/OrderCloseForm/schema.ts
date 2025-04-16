import {z} from 'zod';

export const orderCloseSchema = z.object({
    total: z.number().min(1, {message: 'Поле обязательно для заполнения'}),

    files: z
        .array(z.instanceof(File))
        .min(1, {message: 'Загрузите хотя бы один файл'})
        .max(5, {message: 'Максимум 5 файлов'}),
});

export type OrderCloseData = z.infer<typeof orderCloseSchema>;
