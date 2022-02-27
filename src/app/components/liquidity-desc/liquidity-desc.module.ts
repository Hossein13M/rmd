import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiquidityDescComponent } from './liquidity-desc.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
    declarations: [LiquidityDescComponent],
    imports: [CommonModule, MatCardModule, MatDividerModule, MatExpansionModule],
    exports: [LiquidityDescComponent],
    providers: [],
    entryComponents: [],
})
export class LiquidityDescModule {}
