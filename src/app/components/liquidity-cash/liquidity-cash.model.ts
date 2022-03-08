export interface LiquidityInfo {
    id: number;
    createdAt: string;
    titleEN: string;
    titleFA: string;
    value: string;
    percentage: string;
}

export interface LiquidityCashModel {
    pieChart: Array<LiquidityInfo>;
    table: Array<LiquidityInfo>;
}
