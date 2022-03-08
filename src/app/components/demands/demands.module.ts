import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandsComponent } from './demands.component';
import { TableModule } from '../table/table.module';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { GeneralTableModule } from '../general-table/general-table.module';

@NgModule({
    declarations: [DemandsComponent],
    imports: [CommonModule, TableModule, MatCardModule, MatDividerModule, GeneralTableModule],
    exports: [DemandsComponent],
})
export class DemandsModule {}
