import { Component, Input, OnInit } from '@angular/core';
import { ComponentDataGetInfo, LiquidityReportChart } from '../../models/common.model';
import { AppService } from '../../services/app.service';

@Component({
    selector: 'app-liquidity-chart',
    templateUrl: './liquidity-chart.component.html',
    styleUrls: ['./liquidity-chart.component.scss'],
})
export class LiquidityChartComponent implements OnInit {
    @Input() info!: ComponentDataGetInfo;
    public liquidityReportChartInfo: Array<LiquidityReportChart> = [];

    constructor(private readonly appService: AppService) {}

    ngOnInit(): void {
        this.getLiquidityReportChart();
    }

    private getLiquidityReportChart(): void {
        this.appService.getLiquidityReportChart(this.info.organization, this.info.createdAt).subscribe((response) => {
            this.liquidityReportChartInfo = response;
        });
    }
}
