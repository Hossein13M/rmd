import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { ComponentDataGetInfo } from '../../models/common.model';
import { ContractListModel } from './contract-list.model';

@Component({
    selector: 'app-contracts-list',
    templateUrl: './contracts-list.component.html',
    styleUrls: ['./contracts-list.component.scss'],
})
export class ContractsListComponent implements OnInit {
    @Input() info!: ComponentDataGetInfo;
    public contractsList: Array<ContractListModel> = [];

    constructor(private readonly appService: AppService) {}

    ngOnInit(): void {
        this.getContractsList();
    }

    private getContractsList(): void {
        this.appService.getContractsList(this.info.organization, this.info.createdAt).subscribe((response) => {
            this.contractsList = response;
        });
    }
}
