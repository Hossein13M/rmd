export interface TableBtn {
    styleClass: string;
    icon: string;
    payload: (arg0: any) => any;
    action: string;
}

export interface TableColumn {
    columnDef: string;
    header: string;
    cell: (arg0: any) => string;
    minWidth: string;
}
