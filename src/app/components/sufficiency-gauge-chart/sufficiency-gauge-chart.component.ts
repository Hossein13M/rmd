import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { ComponentDataGetInfo, Status } from '../../models/common.model';
import { SufficiencyItem, SufficiencyReport } from './sufficiency-gauge-chart.model';
import { TableHeaderModel } from '../table/table.model';
import { Gauges } from '../../const/constants';

@Component({
    selector: 'app-sufficiency-gauge-chart',
    templateUrl: './sufficiency-gauge-chart.component.html',
    styleUrls: ['./sufficiency-gauge-chart.component.scss'],
})
export class SufficiencyGaugeChartComponent implements OnInit {
    @Input() info!: ComponentDataGetInfo;
    public sufficiencyGaugeReport!: SufficiencyReport;
    public loading: boolean = true;
    public gauges: Array<{ titleEN: string; titleFA: string }> = Gauges;
    public tableHeader: Array<TableHeaderModel> = [
        { headerIndicator: 'titleFA', headerTitle: 'نام', width: '500' },
        { headerIndicator: 'value', headerTitle: 'ارزش', width: '500' },
        { headerIndicator: 'change', headerTitle: 'تغییرات', width: '500' },
    ];
    public columns = [
        { columnDef: 'titleFA', header: 'نام', cell: (element: SufficiencyItem) => `${element.titleFA}`, minWidth: 'min-width: 800px;' },
        { columnDef: 'value', header: 'ارزش', cell: (element: SufficiencyItem) => `${element.value}`, minWidth: 'min-width: 400px;' },
        {
            columnDef: 'change',
            header: 'تغییرات',
            cell: (element: SufficiencyItem) => `${element.change ? Number(element.change) : '-'}`,
            minWidth: 'min-width: 200px;',
        },
    ];

    constructor(private readonly appService: AppService) {}

    ngOnInit(): void {
        this.getSufficiencyReport();
    }

    private getSufficiencyReport(): void {
        this.appService.getSufficiencyReport(this.info.organization, this.info.createdAt).subscribe((response) => {
            this.sufficiencyGaugeReport = response;
            this.loading = false;
        });
    }

    public prepareDataForGauge(gaugeName: string): Array<{ rangeStart: number; rangeEnd: number; rangeColor: Status }> {
        const ranges: Array<{ rangeStart: number; rangeEnd: number; rangeColor: Status }> = [];
        const foundGaugeItem = this.sufficiencyGaugeReport.gauge.find((item) => item.titleEN === gaugeName);
        ranges.push(
            { rangeStart: foundGaugeItem!.range1Start, rangeEnd: foundGaugeItem!.range1End, rangeColor: foundGaugeItem!.range1Color },
            { rangeStart: foundGaugeItem!.range2Start, rangeEnd: foundGaugeItem!.range2End, rangeColor: foundGaugeItem!.range2Color },
            { rangeStart: foundGaugeItem!.range3Start, rangeEnd: foundGaugeItem!.range3End, rangeColor: foundGaugeItem!.range3Color }
        );

        return ranges;
    }

    public prepareHandValue(gaugeName: string): number {
        return Number(this.sufficiencyGaugeReport.gauge.find((item) => item.titleEN === gaugeName)!.value);
    }

    public prepareRangeMinMax(gaugeName: string): { minValue: number; maxValue: number } {
        return {
            minValue: this.sufficiencyGaugeReport.gauge.find((item) => item.titleEN === gaugeName)!.range1Start,
            maxValue: this.sufficiencyGaugeReport.gauge.find((item) => item.titleEN === gaugeName)!.range3End,
        };
    }
}
