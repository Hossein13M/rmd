import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandsComponent } from './demands.component';
import { TableModule } from '../table/table.module';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    declarations: [DemandsComponent],
    imports: [CommonModule, TableModule, MatCardModule, MatDividerModule],
    exports: [DemandsComponent],
})
export class DemandsModule {}
