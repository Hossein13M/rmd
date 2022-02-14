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

export interface LiquidityReportDescriptions {
    id: number;
    createdAt: Date;
    date?: string;
    desc1: string;
    desc2: string;
    desc3: string;
    desc4: string;
    desc5: string;
    desc6: string;
    desc7: string;
    desc8: string;
    title1: string;
    title2: string;
    title3: string;
    title4: string;
    title5: string;
    title6: string;
    title7: string;
    title8: string;
}

export interface LiquidityReportForGettingData {
    organization: string;
    createdAt: string;
}

export type ComponentDataGetInfo = { organization: string; createdAt: string };
