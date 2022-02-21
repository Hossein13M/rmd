import { Component, Input, OnInit } from '@angular/core';
import { ComponentDataGetInfo } from '../../models/common.model';
import { AppService } from '../../services/app.service';
import { NetProfitModel, OperationalProfitModel, ProfitStatus } from './profit.model';
import { IconColor } from '../../const/constants';

@Component({
    selector: 'app-profit',
    templateUrl: './profit.component.html',
    styleUrls: ['./profit.component.scss'],
})
export class ProfitComponent implements OnInit {
    @Input() info!: ComponentDataGetInfo;
    @Input() profitType!: 'net' | 'operational';
    public profitData!: NetProfitModel | OperationalProfitModel;

    constructor(private readonly appService: AppService) {}

    ngOnInit(): void {
        this.getProfitInfoBasedOnProfitType();
    }

    private getProfitInfoBasedOnProfitType(): void {
        this.profitType === 'net' ? this.getNetProfit() : this.getOperationalProfit();
    }

    private getNetProfit(): void {
        this.appService.getNetProfit(this.info.organization, this.info.createdAt).subscribe((response) => {
            this.profitData = response as NetProfitModel;
        });
    }

    private getOperationalProfit(): void {
        this.appService.getOperationalProfit(this.info.organization, this.info.createdAt).subscribe((response) => {
            this.profitData = response as OperationalProfitModel;
        });
    }

    public getIconColorBasedOnStatus(profitStatus: ProfitStatus): string {
        return IconColor.find((status) => status.status == profitStatus)!.class;
    }

    public getProfitValueBasedOnProfitType(profit: NetProfitModel | OperationalProfitModel): number {
        return 'netProfitMargin' in profit ? (profit as NetProfitModel).netProfitMargin : (profit as OperationalProfitModel).operatingProfitMargin;
    }
}
