import { Component, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { TableBtn, TableColumn } from './general-table.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Utils } from '../../utils';
import { Status } from '../../models/common.model';

@Component({
    selector: 'app-general-table',
    templateUrl: './general-table.component.html',
    styleUrls: ['./general-table.component.scss'],
})
export class GeneralTableComponent {
    @Input() columns: Array<TableColumn> = [];
    @Input() buttons: Array<TableBtn> = [];
    @Input() data: Array<any> = [];
    @Input() filter: boolean = false;
    @Input() filterPlaceholder: string = 'Filter';
    @Input() footer!: string;
    @Input() pagination: Array<number> = [];
    @Input() hasPaginator: boolean = false;
    @Input() pageSize!: number;
    @Input() tableMinWidth: number = 500;
    @Output() filteredData = new EventEmitter<Array<any>>();
    @Output() buttonClick = new EventEmitter<Array<string>>();

    dataSource!: MatTableDataSource<any>;
    displayedColumns!: Array<string>;

    @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort!: MatSort;

    ngOnChanges(changes: SimpleChanges): void {
        if (this.data) {
            if (changes['data']) {
                this.dataSource = new MatTableDataSource(this.data);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
                this.displayedColumns = [...this.columns.map((c) => c.columnDef)];
                if (this.buttons.length > 0) this.displayedColumns = [...this.displayedColumns, 'actions'];
            }
        }
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        this.filteredData.emit(this.dataSource.filteredData);

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }

        this.dataSource.sort = this.sort;
    }

    public getIconColorBasedOnStatus(cellStatus: string): string {
        return Utils.getColorBasedOnStatus(<Status>cellStatus);
    }

    public checkForStatus(status: string): boolean {
        if (status) {
            return status === 'green' || status === 'red' || status === 'yellow' || status === 'orange';
        } else return false;
    }

    public returnValue(text: string): string {
        return this.checkForBeingNumber(text) ? `${Number(text).toFixed(2)}` : <string>text;
    }

    public checkForBeingNumber(text: string): boolean {
        return Utils.isNumeric(text);
    }

    public checkForPositiveNumber(number: number): boolean {
        return number > 0;
    }

    public checkForChangeColumns(column: TableColumn): boolean {
        return column.columnDef === 'change';
    }

    public KIR(dool: string): number {
        return +dool * -1;
    }
}
