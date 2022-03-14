import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import { HistoryRoutingModule } from './history-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { GeneralTableModule } from '../../components/general-table/general-table.module';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    declarations: [HistoryComponent],
    imports: [CommonModule, HistoryRoutingModule, MatTableModule, MatCardModule, MatDividerModule, GeneralTableModule, MatDividerModule],
    exports: [HistoryComponent],
})
export class HistoryModule {}
