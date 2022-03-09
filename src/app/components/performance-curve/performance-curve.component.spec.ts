import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceCurveComponent } from './performance-curve.component';

describe('PerformanceCurveComponent', () => {
    let component: PerformanceCurveComponent;
    let fixture: ComponentFixture<PerformanceCurveComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PerformanceCurveComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PerformanceCurveComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
