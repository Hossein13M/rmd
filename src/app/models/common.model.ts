export type ValidRoutes = 'dashboard' | 'upload-file' | '';

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

export interface ReportInfo {
    organization: string;
    reportType: string;
    reportTypeId: number;
    type: number;
    date: string;
    file: any;
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
