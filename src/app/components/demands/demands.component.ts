import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { ComponentDataGetInfo } from '../../models/common.model';
import { DemandsModel } from './demands.model';
import { TableHeaderModel } from '../table/table.model';

@Component({
    selector: 'app-demands',
    templateUrl: './demands.component.html',
    styleUrls: ['./demands.component.scss'],
})
export class DemandsComponent implements OnInit {
    @Input() info!: ComponentDataGetInfo;
    public demands: Array<DemandsModel> = [];
    public tableHeader: Array<TableHeaderModel> = [
        { headerIndicator: 'titleFA', headerTitle: 'نام' },
        { headerIndicator: 'value', headerTitle: 'ارزش' },
        { headerIndicator: 'description', headerTitle: 'توضیحات' },
    ];

    constructor(private readonly appService: AppService) {}

    ngOnInit(): void {
        this.getDemandsReport();
    }

    private getDemandsReport(): void {
        this.appService.getDemandsReport(this.info.organization, this.info.createdAt).subscribe((response) => {
            this.demands = response;
            this.demands[0].value = 100;
            console.log(this.demands);
        });
    }
}
