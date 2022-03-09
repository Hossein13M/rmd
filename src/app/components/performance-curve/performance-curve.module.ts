import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformanceCurveComponent } from './performance-curve.component';
import { ComboChartPerformanceCurveModule } from '../chart/combo-chart-performance-curve/combo-chart-performance-curve.module';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    declarations: [PerformanceCurveComponent],
    exports: [PerformanceCurveComponent],
    imports: [CommonModule, ComboChartPerformanceCurveModule, MatCardModule, MatDividerModule],
})
export class PerformanceCurveModule {}
