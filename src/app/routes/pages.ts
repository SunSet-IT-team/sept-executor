/**
 * Маппинг роутов страниц приложения
 */

export enum SlugPages {
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
     * Чат
     */
    CHAT = 'chat',

    /**
     * Заказы
     */
    ORDERS = 'orders',

    /**
     * Заказы
     */
    PROFILE = 'profile',
}
