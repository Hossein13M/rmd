import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { ComponentDataGetInfo } from '../../models/common.model';
import { DemandsModel } from './demands.model';

@Component({
    selector: 'app-demands',
    templateUrl: './demands.component.html',
    styleUrls: ['./demands.component.scss'],
})
export class DemandsComponent implements OnInit {
    @Input() info!: ComponentDataGetInfo;
    public demands: Array<DemandsModel> = [];

    public columns = [
        { columnDef: 'titleFA', header: 'نام', cell: (element: DemandsModel) => `${element.titleFA}`, minWidth: 'min-width: 600px;' },
        { columnDef: 'value', header: 'ارزش', cell: (element: DemandsModel) => `${element.value}`, minWidth: 'min-width: 400px;' },
        { columnDef: 'description', header: 'توضیحات', cell: (element: DemandsModel) => `${element.description}`, minWidth: 'min-width: 400px;' },
    ];

    constructor(private readonly appService: AppService) {}

    ngOnInit(): void {
        this.getDemandsReport();
    }

    private getDemandsReport(): void {
        this.appService.getDemandsReport(this.info.organization, this.info.createdAt).subscribe((response) => (this.demands = response));
    }
}
