export interface IReview {
    order: IOrder;
    review: IReviewData;
}

export interface IOrder {
    id: string;
    date: string;
    address: string;
    customer: ICustomer;
}

export interface ICustomer {
    name: string;
    avatarUrl: string;
}

export type IReviewData = {
    rating: number;
    text: string;
};