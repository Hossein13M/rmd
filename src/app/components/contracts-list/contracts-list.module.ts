import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractsListComponent } from './contracts-list.component';
import { ChartModule } from '../chart/chart.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    declarations: [ContractsListComponent],
    exports: [ContractsListComponent],
    imports: [CommonModule, ChartModule, MatCardModule, MatIconModule, MatDividerModule],
})
export class ContractsListModule {}
