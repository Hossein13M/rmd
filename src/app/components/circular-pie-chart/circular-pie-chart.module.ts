import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircularPieChartComponent } from './circular-pie-chart.component';
import { MatCardModule } from '@angular/material/card';
import { ChartModule } from '../chart/chart.module';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    declarations: [CircularPieChartComponent],
    imports: [CommonModule, MatCardModule, ChartModule, MatDividerModule],
    exports: [CircularPieChartComponent],
})
export class CircularPieChartModule {}
