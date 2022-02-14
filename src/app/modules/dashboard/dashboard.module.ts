import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from '../../components/chart/chart.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LiquidityDescModule } from '../../components/liquidity-desc/liquidity-desc.module';

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatButtonModule,
        MatTooltipModule,
        MatIconModule,
        MatSelectModule,
        ChartModule,
        DashboardRoutingModule,
        LiquidityDescModule,
    ],
})
export class DashboardModule {}
