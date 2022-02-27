import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetValueComponent } from './budget-value.component';

describe('BudgetValueComponent', () => {
    let component: BudgetValueComponent;
    let fixture: ComponentFixture<BudgetValueComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BudgetValueComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BudgetValueComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
