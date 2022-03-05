export type ConcentrationReportType = 'type' | 'rate' | 'bank' | 'investment';

export interface ConcentrationReport {
    id: number;
    createdAt: string;
    titleEN: string;
    titleFA: string;
    value: number;
    organization: string;
}
