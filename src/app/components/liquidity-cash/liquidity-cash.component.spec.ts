import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidityCashComponent } from './liquidity-cash.component';

describe('LiquidityCashComponent', () => {
    let component: LiquidityCashComponent;
    let fixture: ComponentFixture<LiquidityCashComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LiquidityCashComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LiquidityCashComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
