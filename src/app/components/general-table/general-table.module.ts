import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralTableComponent } from './general-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [GeneralTableComponent],
    imports: [CommonModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatSortModule, MatIconModule],
    exports: [GeneralTableComponent],
})
export class GeneralTableModule {}
