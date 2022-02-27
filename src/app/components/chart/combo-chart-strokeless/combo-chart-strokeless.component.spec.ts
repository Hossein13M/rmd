import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComboChartStrokelessComponent } from './combo-chart-strokeless.component';

describe('ComboChartStrokelessComponent', () => {
    let component: ComboChartStrokelessComponent;
    let fixture: ComponentFixture<ComboChartStrokelessComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ComboChartStrokelessComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ComboChartStrokelessComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
