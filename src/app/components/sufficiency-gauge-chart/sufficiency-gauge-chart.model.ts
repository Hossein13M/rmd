import { Status } from '../../models/common.model';

export interface SufficiencyGaugeChartModel {
    id: number;
    createdAt: string;
    titleEN: string;
    titleFA: string;
    value: string;
    description: string;
}

export interface SufficiencyItem {
    id: number;
    createdAt: string;
    titleEN: string;
    titleFA: string;
    value: string;
    change: null;
    range1Start: number;
    range1End: number;
    range1Color: Status;
    range2Start: number;
    range2End: number;
    range2Color: Status;
    range3Start: number;
    range3End: number;
    range3Color: Status;
}

export interface SufficiencyReport {
    gauge: Array<SufficiencyItem>;
    table: Array<SufficiencyItem>;
}
