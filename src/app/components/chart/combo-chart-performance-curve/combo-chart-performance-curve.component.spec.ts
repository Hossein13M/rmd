import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboChartPerformanceCurveComponent } from './combo-chart-performance-curve.component';

describe('ComboChartPerformanceCurveComponent', () => {
    let component: ComboChartPerformanceCurveComponent;
    let fixture: ComponentFixture<ComboChartPerformanceCurveComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ComboChartPerformanceCurveComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ComboChartPerformanceCurveComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
