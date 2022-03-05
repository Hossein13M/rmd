import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [TableComponent],
    imports: [CommonModule, MatTableModule, MatIconModule],
    exports: [TableComponent],
    providers: [],
})
export class TableModule {}
