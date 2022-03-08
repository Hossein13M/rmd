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
import { MatDividerModule } from '@angular/material/divider';
import { ContractsListModule } from '../../components/contracts-list/contracts-list.module';
import { ProfitModule } from '../../components/profit/profit.module';
import { LiquidityChartModule } from '../../components/liquidity-chart/liquidity-chart.module';
import { BudgetValueModule } from '../../components/budget-value/budget-value.module';
import { SufficiencyGaugeChartModule } from '../../components/sufficiency-gauge-chart/sufficiency-gauge-chart.module';
import { CircularPieChartModule } from '../../components/circular-pie-chart/circular-pie-chart.module';
import { DemandsModule } from '../../components/demands/demands.module';
import { LiquidityCashModule } from '../../components/liquidity-cash/liquidity-cash.module';
import { PerformanceCurveModule } from '../../components/performance-curve/performance-curve.module';

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
        MatDividerModule,
        ContractsListModule,
        ProfitModule,
        LiquidityChartModule,
        BudgetValueModule,
        SufficiencyGaugeChartModule,
        CircularPieChartModule,
        DemandsModule,
        LiquidityCashModule,
        PerformanceCurveModule,
    ],
})
export class DashboardModule {}
