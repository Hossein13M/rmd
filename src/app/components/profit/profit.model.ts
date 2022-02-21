export type ProfitStatus = 'Green' | 'Yellow' | 'Red';

interface ProfitModel {
    id: number;
    createdAt: string;
    changePercentage: number;
    status: ProfitStatus;
}

export interface OperationalProfitModel extends ProfitModel {
    operatingProfitMargin: number;
}

export interface NetProfitModel extends ProfitModel {
    netProfitMargin: number;
}
