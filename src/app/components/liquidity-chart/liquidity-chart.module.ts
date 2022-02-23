import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiquidityChartComponent } from './liquidity-chart.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ChartModule } from '../chart/chart.module';

@NgModule({
    declarations: [LiquidityChartComponent],
    imports: [CommonModule, MatCardModule, MatDividerModule, ChartModule],
    exports: [LiquidityChartComponent],
})
export class LiquidityChartModule {}
