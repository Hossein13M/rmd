export enum Status {
    'در حال پردازش دیتا' = 0,
    'خطا ' = 1,
    'موفقیت‌آمیز' = 2,
}

export interface HistoryModel {
    id: number;
    reportType: string;
    type: string;
    date: string;
    objectName: string;
    organization: string;
    objectUrl: string;
    status: Status;
}
