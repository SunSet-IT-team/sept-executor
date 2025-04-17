export interface IStats {
    incomeForMonth: string;
    incomeTotal: string;
    stats_for_month: {
        callsAmoute: string;
        closedAmoute: string;
        rejectedAmoute: string;
    };
    stats_total: {
        callsAmoute: string;
        closedAmoute: string;
        rejectedAmoute: string;
    };
}