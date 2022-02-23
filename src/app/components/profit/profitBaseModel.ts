export type ProfitStatus = 'Green' | 'Yellow' | 'Red';
export type ProfitType = 'net' | 'operational' | 'roe' | 'roa';
export type ProfitModels = ROAModel | ROEModel | NetProfitModel | OperationalProfitModel;

interface ProfitBaseModel {
    id: number;
    createdAt: string;
    changePercentage: number;
    status: ProfitStatus;
}

export interface OperationalProfitModel extends ProfitBaseModel {
    operatingProfitMargin: number;
}

export interface NetProfitModel extends ProfitBaseModel {
    netProfitMargin: number;
}

export interface ROEModel extends ProfitBaseModel {
    ROE: number;
}

export interface ROAModel extends ProfitBaseModel {
    ROA: number;
}
