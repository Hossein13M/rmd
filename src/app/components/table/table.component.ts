import { Component, Input, OnInit } from '@angular/core';
import { TableHeaderModel } from './table.model';
import { DemandsModel } from '../demands/demands.model';
import { LiquidityInfo } from '../liquidity-cash/liquidity-cash.model';
import { Utils } from '../../utils';
import { Status } from '../../models/common.model';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
    @Input() dataSource: Array<DemandsModel | LiquidityInfo> = [];
    @Input() columns: Array<TableHeaderModel> = [];
    public tableHeadersString: Array<string> = [];

    constructor() {}

    ngOnInit(): void {
        this.prepareTableHeaders();
    }

    private prepareTableHeaders(): void {
        this.columns.map((tableHeader) => this.tableHeadersString.push(tableHeader.headerIndicator));
    }

    public checkForStatus(status: string): boolean {
        if (status) {
            return status === 'green' || status === 'red' || status === 'yellow';
        } else return false;
    }

    public getIconColorBasedOnStatus(cellStatus: Status): string {
        return Utils.getIconColorBasedOnStatus(cellStatus);
    }
}
