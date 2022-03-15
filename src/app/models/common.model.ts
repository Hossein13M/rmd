export type ValidRoutes = 'dashboard' | 'upload-file' | '' | 'history';
export type Status = 'green' | 'yellow' | 'red' | 'orange';

export interface ValidRouteTranslation {
    persianTitle: string;
    englishTitle: ValidRoutes;
}

export interface Organization {
    id: number;
    name: string;
    nationalCode: string;
    isActive: boolean;
    deletedAt: null | string;
}

export interface Report {
    id: number;
    name: string;
    isActive: boolean;
    deletedAt: Date;
}

export interface LiquidityReportChart {
    id: number;
    createdAt: Date;
    date: string;
    G1: string;
    G2: string;
    G3: string;
    G4: string;
    G5: string;
    G6: string;
}

export interface LiquidityReportDescriptionsNew {
    id: number;
    createdAt: Date;
    description: string;
    title: string;
}

export interface LiquidityReportForGettingData {
    organization: string;
    createdAt: string;
}

export type ComponentDataGetInfo = { organization: string; createdAt: string };
