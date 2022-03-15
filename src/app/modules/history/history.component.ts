import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { TableBtn } from '../../components/general-table/general-table.model';
import { HistoryModel, Status } from './history.model';
import { Utils } from '../../utils';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
    public history: Array<HistoryModel> = [];
    public buttons: Array<TableBtn> = [
        {
            styleClass: 'btn btn-success px-2 text-blue-500',
            icon: 'download',
            payload: (element: HistoryModel) => this.downloadFile(element.objectUrl),
            action: 'download',
        },
    ];

    public columns = [
        // { columnDef: 'name', header: 'نام فایل', cell: (element: HistoryModel) => `${element.objectName}`, minWidth: 'min-width: 600px;' },
        { columnDef: 'type', header: 'نوع', cell: (element: HistoryModel) => `${element.type}`, minWidth: 'min-width: 100px;' },
        {
            columnDef: 'date',
            header: 'تاریخ آپلود',
            cell: (element: HistoryModel) => `${Utils.convertDateToPersianDateString(new Date(element.date))}`,
            minWidth: 'min-width: 400px;',
        },
        { columnDef: 'organization', header: 'نهاد', cell: (element: HistoryModel) => `${element.organization}`, minWidth: 'min-width: 250px;' },
        { columnDef: 'reportType', header: 'نوع گزارش', cell: (element: HistoryModel) => `${element.reportType}`, minWidth: 'min-width: 300px;' },
        { columnDef: 'status', header: 'وضعیت', cell: (element: HistoryModel) => `${Status[element.status]}`, minWidth: 'min-width: 300px;' },
    ];

    constructor(private appService: AppService) {}

    ngOnInit(): void {
        this.getFileUploadHistory();
    }

    private getFileUploadHistory(): void {
        this.appService.getFileUploadHistory().subscribe((response) => (this.history = response));
    }

    public downloadFile(url: string): void {
        window.location.href = url;
    }
}
