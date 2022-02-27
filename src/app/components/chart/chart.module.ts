import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboChartComponent } from './combo-chart/combo-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { ComboChartStrokelessComponent } from './combo-chart-strokeless/combo-chart-strokeless.component';

@NgModule({
    declarations: [ComboChartComponent, BarChartComponent, ComboChartStrokelessComponent],
    imports: [CommonModule, MatDividerModule, MatCardModule],
    exports: [ComboChartComponent, BarChartComponent, ComboChartStrokelessComponent],
})
export class ChartModule {}
