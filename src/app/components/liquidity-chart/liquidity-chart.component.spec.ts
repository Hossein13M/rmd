import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidityChartComponent } from './liquidity-chart.component';

describe('LiquidityChartComponent', () => {
    let component: LiquidityChartComponent;
    let fixture: ComponentFixture<LiquidityChartComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LiquidityChartComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LiquidityChartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
