import { Component, Input, OnInit } from '@angular/core';
import { ComponentDataGetInfo } from '../../models/common.model';
import { AppService } from '../../services/app.service';
import { ConcentrationReportDictionary, ConcentrationReportURL } from '../../const/constants';
import { ConcentrationReport, ConcentrationReportType } from './circular-pie-chart.model';

@Component({
    selector: 'app-circular-pie-chart',
    templateUrl: './circular-pie-chart.component.html',
    styleUrls: ['./circular-pie-chart.component.scss'],
})
export class CircularPieChartComponent implements OnInit {
    @Input() info!: ComponentDataGetInfo;
    @Input() concentrationReportType: ConcentrationReportType = 'type';
    public concentrationReportData: Array<ConcentrationReport> = [];

    constructor(private readonly appService: AppService) {}

    ngOnInit(): void {
        this.getConcentrationReport(ConcentrationReportURL[this.concentrationReportType]);
    }

    private getConcentrationReport(reportUrl: string): void {
        this.appService.getConcentrationPieChartReport(this.info.organization, this.info.createdAt, reportUrl).subscribe((response) => {
            this.concentrationReportData = response;
            this.prepareDataForChart();
        });
    }

    public prepareDataForChart(): Array<{ titleFA: string; value: number }> {
        const chartData: Array<{ titleFA: string; value: number }> = [];
        this.concentrationReportData.map((report) => chartData.push({ titleFA: report.titleFA, value: report.value }));
        return chartData;
    }

    public getProfitPersianName(): string {
        return ConcentrationReportDictionary[this.concentrationReportType];
    }
}
