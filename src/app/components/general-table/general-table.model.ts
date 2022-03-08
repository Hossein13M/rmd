export interface TableBtn {
    styleClass: string;
    icon: string;
    payload: (arg0: any) => string;
    action: string;
}

export interface TableColumn {
    columnDef: string;
    header: string;
    cell: (arg0: any) => string;
    minWidth: string;
}
