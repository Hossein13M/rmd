import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { ComponentDataGetInfo } from '../../models/common.model';
import { LiquidityCashModel, LiquidityInfo } from './liquidity-cash.model';

@Component({
    selector: 'app-liquidity-cash',
    templateUrl: './liquidity-cash.component.html',
    styleUrls: ['./liquidity-cash.component.scss'],
})
export class LiquidityCashComponent implements OnInit {
    @Input() info!: ComponentDataGetInfo;
    public liquidityInfo!: LiquidityCashModel;
    public data: Array<{ titleFA: string; value: number }> = [];
    public columns = [
        { columnDef: 'titleFA', header: 'نام', cell: (element: LiquidityInfo) => `${element.titleFA}`, minWidth: 'min-width: 400px;' },
        { columnDef: 'value', header: 'ارزش', cell: (element: LiquidityInfo) => `${element.value}`, minWidth: 'min-width: 360px;' },
    ];

    constructor(private readonly appService: AppService) {}

    ngOnInit(): void {
        this.getLiquidityReport();
    }

    private getLiquidityReport(): void {
        this.appService.getLiquidityCashReport(this.info.organization, this.info.createdAt).subscribe((response) => {
            this.liquidityInfo = response;
            this.prepareDataForPieChart();
        });
    }

    private prepareDataForPieChart(): void {
        this.liquidityInfo.pieChart.map((item) => {
            this.data.push({ titleFA: item.titleFA, value: +item.value });
        });
    }
}
