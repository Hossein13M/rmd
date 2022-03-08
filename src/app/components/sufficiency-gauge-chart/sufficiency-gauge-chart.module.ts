import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SufficiencyGaugeChartComponent } from './sufficiency-gauge-chart.component';
import { ChartModule } from '../chart/chart.module';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { TableModule } from '../table/table.module';
import { GeneralTableModule } from '../general-table/general-table.module';

@NgModule({
    declarations: [SufficiencyGaugeChartComponent],
    imports: [CommonModule, ChartModule, MatCardModule, MatDividerModule, TableModule, GeneralTableModule],
    exports: [SufficiencyGaugeChartComponent],
})
export class SufficiencyGaugeChartModule {}
