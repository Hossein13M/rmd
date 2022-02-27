import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { ComponentDataGetInfo } from '../../models/common.model';
import { ContractsListModel } from './contracts-list.model';

@Component({
    selector: 'app-contracts-list',
    templateUrl: './contracts-list.component.html',
    styleUrls: ['./contracts-list.component.scss'],
})
export class ContractsListComponent implements OnInit {
    @Input() info!: ComponentDataGetInfo;
    public contractsList: Array<ContractsListModel> = [];
    public barChartData: Array<{ name: string; value: string }> = [];

    constructor(private readonly appService: AppService) {}

    ngOnInit(): void {
        this.getContractsList();
    }

    private getContractsList(): void {
        this.appService.getContractsList(this.info.organization, this.info.createdAt).subscribe((response) => {
            this.contractsList = response;
            this.prepareDataForBarChart();
        });
    }

    private prepareDataForBarChart(): void {
        this.contractsList.map((contractItem) => {
            this.barChartData.push({ name: contractItem.titleFA, value: `${contractItem.count + 50}` });
        });
    }
}
