export type Stats = {
    income: {
        month: number;
        total: number;
    };
    statsMonth: {
        calls: number;
        closed: number;
        rejected: number;
    };
    statsTotal: {
        calls: number;
        closed: number;
        rejected: number;
    };
};
