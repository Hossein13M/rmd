import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboChartComponent } from './combo-chart/combo-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

@NgModule({
    declarations: [ComboChartComponent, BarChartComponent],
    imports: [CommonModule],
    exports: [ComboChartComponent, BarChartComponent],
})
export class ChartModule {}
