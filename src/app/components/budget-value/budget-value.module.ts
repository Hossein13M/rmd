import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetValueComponent } from './budget-value.component';
import { MatCardModule } from '@angular/material/card';
import { ChartModule } from '../chart/chart.module';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    declarations: [BudgetValueComponent],
    imports: [CommonModule, MatCardModule, ChartModule, MatDividerModule],
    exports: [BudgetValueComponent],
})
export class BudgetValueModule {}
