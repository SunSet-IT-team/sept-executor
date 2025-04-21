/**
 * Получить нормальный путь к картинкам
 */
export const getImagePath = (path?: string) => {
    if (!path) return '';

    const host = import.meta.env.VITE_SERVER_URL || '';

    const normalPath = path.replace('files/', 'uploads/');

    return host + normalPath;
};

/**
 * Получить файл по url
 */
export async function urlToFile(url: string): Promise<File> {
    const res = await fetch(url);
    const blob = await res.blob();

    // Пытаемся получить имя файла из URL
    const urlParts = url.split('/');
    const fileName = urlParts[urlParts.length - 1] || 'file';

    // Определяем MIME-тип из заголовка ответа
    const contentType =
        res.headers.get('Content-Type') || 'application/octet-stream';

    return new File([blob], fileName, {type: contentType});
}

// Проверка поддержки HEIC в браузере
export const isHeicSupported = () => {
    const canvas = document.createElement('canvas');
    return canvas.toDataURL('image/heic').indexOf('data:image/heic') === 0;
};
