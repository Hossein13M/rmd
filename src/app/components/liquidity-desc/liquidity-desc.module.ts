import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiquidityDescComponent } from './liquidity-desc.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    declarations: [LiquidityDescComponent],
    imports: [CommonModule, MatCardModule, MatDividerModule],
    exports: [LiquidityDescComponent],
    providers: [],
    entryComponents: [],
})
export class LiquidityDescModule {}
