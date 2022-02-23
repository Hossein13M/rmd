import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboChartComponent } from './combo-chart/combo-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [ComboChartComponent, BarChartComponent],
    imports: [CommonModule, MatDividerModule, MatCardModule],
    exports: [ComboChartComponent, BarChartComponent],
})
export class ChartModule {}
