import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboChartPerformanceCurveComponent } from './combo-chart-performance-curve.component';

@NgModule({
    declarations: [ComboChartPerformanceCurveComponent],
    exports: [ComboChartPerformanceCurveComponent],
    imports: [CommonModule],
})
export class ComboChartPerformanceCurveModule {}
