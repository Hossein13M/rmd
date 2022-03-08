import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SufficiencyGaugeChartComponent } from './sufficiency-gauge-chart.component';

describe('SufficiencyGaugeChartComponent', () => {
    let component: SufficiencyGaugeChartComponent;
    let fixture: ComponentFixture<SufficiencyGaugeChartComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SufficiencyGaugeChartComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SufficiencyGaugeChartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
