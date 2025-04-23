/**
 * Маппинг роутов страниц приложения
 */

export enum SlugPages {
    /**
     * Страница выбора точки входа
     */
    CHOOSE_AUTH = 'choose-auth',

    /**
     * Страница авторизации
     */
    AUTH = 'auth',

    /**
     * Страница логина
     */
    LOGIN = 'login',

    /**
     * Страница Регистрации - выбора формы окаазания услуг
     */
    REGISTER_CHOOSE_FORM = 'register/choose-form',

    /**
     * Страница Регистрации - заполнение формы
     */
    REGISTER_COLLECT_INFO = 'register/collect-info',

    /**
     * Страница подвтерждения
     */
    CONFIRM = 'confirm',

    /**
     * Страница сброса паролья
     */
    RESET = 'reset',

    /**
     * Чат
     */
    CHAT = 'chat',

    /**
     * Заказы
     */
    ORDERS = 'orders',

    /**
     * Профиль
     */
    PROFILE = 'profile',

    /**
     * Мои отзывы
     */
    MY_REVIEWS = 'my-reviews',

    /**
     * Статистика
     */
    STATISTICS = 'stats',

    /**
     * Настройки
     */
    SETTINGS = 'settings',

    /**
     * Мои документы
     */
    MY_DOCUMENTS = 'my-documents',

    /**
     * Тех. поддержка
     */
    SUPPORT = 'support',
}
