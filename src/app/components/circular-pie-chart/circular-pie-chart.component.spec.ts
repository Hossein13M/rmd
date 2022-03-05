import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularPieChartComponent } from './circular-pie-chart.component';

describe('CircularPieChartComponent', () => {
    let component: CircularPieChartComponent;
    let fixture: ComponentFixture<CircularPieChartComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CircularPieChartComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CircularPieChartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
