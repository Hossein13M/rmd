import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfitComponent } from './profit.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [ProfitComponent],
    exports: [ProfitComponent],
    imports: [CommonModule, MatCardModule, MatDividerModule, MatIconModule],
})
export class ProfitModule {}
