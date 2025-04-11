/**
 * ВСЕ ЧТО ВИДИМ ЛЮТЫЙ КОСТЫЛЬ КОТОРЫЙ Я ДЕЛАЮ В 4 УТРА БЕЗ ПЕРЕРЫВА С 12 ДНЯ
 */
export interface IOrder {
    id: string;
    date: string;
    orderName: string;
    status: 'В работе' | 'Выполнен';
    review?: IOrderReview;
}

export type IOrderReview = {
    rating: number;
    text: string;
};
