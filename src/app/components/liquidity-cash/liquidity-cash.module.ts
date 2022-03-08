import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiquidityCashComponent } from './liquidity-cash.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { TableModule } from '../table/table.module';
import { ChartModule } from '../chart/chart.module';
import { GeneralTableModule } from '../general-table/general-table.module';

@NgModule({
    declarations: [LiquidityCashComponent],
    imports: [CommonModule, MatCardModule, MatDividerModule, TableModule, ChartModule, GeneralTableModule],
    exports: [LiquidityCashComponent],
})
export class LiquidityCashModule {}
