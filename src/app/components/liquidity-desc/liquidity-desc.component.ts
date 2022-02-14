import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { ComponentDataGetInfo, LiquidityReportDescriptions } from '../../models/common.model';

@Component({
    selector: 'app-liquidity-desc',
    templateUrl: './liquidity-desc.component.html',
    styleUrls: ['./liquidity-desc.component.scss'],
})
export class LiquidityDescComponent implements OnInit {
    @Input() info!: ComponentDataGetInfo;
    public liquidity!: LiquidityReportDescriptions;

    constructor(private readonly appService: AppService) {}

    ngOnInit(): void {
        this.getLiquidityDescription();
    }

    private getLiquidityDescription(): void {
        this.appService.getLiquidityReportDescriptions(this.info.organization, this.info.createdAt).subscribe((response) => {
            this.liquidity = response;
        });
    }
}
