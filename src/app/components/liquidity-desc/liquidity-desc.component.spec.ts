import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidityDescComponent } from './liquidity-desc.component';

describe('LiquidityDescComponent', () => {
    let component: LiquidityDescComponent;
    let fixture: ComponentFixture<LiquidityDescComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LiquidityDescComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LiquidityDescComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
