import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { ComponentDataGetInfo, LiquidityReportDescriptionsNew } from '../../models/common.model';

@Component({
    selector: 'app-liquidity-desc',
    templateUrl: './liquidity-desc.component.html',
    styleUrls: ['./liquidity-desc.component.scss'],
})
export class LiquidityDescComponent implements OnInit {
    @Input() info!: ComponentDataGetInfo;
    public liquidityDescriptionList: Array<LiquidityReportDescriptionsNew> = [];
    public panelOpenState: boolean = false;

    constructor(private readonly appService: AppService) {}

    ngOnInit(): void {
        this.getLiquidityDescription();
    }

    private getLiquidityDescription(): void {
        this.appService.getLiquidityReportDescriptions(this.info.organization, this.info.createdAt).subscribe((response) => {
            response.map((item) => item.description && this.liquidityDescriptionList.push(item));
        });
    }
}
