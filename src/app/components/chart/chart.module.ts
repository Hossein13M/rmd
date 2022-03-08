import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboChartComponent } from './combo-chart/combo-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { ComboChartStrokelessComponent } from './combo-chart-strokeless/combo-chart-strokeless.component';
import { GaugeChartComponent } from './gauge-chart/gauge-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
    declarations: [ComboChartComponent, BarChartComponent, ComboChartStrokelessComponent, GaugeChartComponent, PieChartComponent],
    imports: [CommonModule, MatDividerModule, MatCardModule],
    exports: [ComboChartComponent, BarChartComponent, ComboChartStrokelessComponent, GaugeChartComponent, PieChartComponent],
})
export class ChartModule {}
