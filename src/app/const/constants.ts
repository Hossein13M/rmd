import { Status, ValidRouteTranslation } from '../models/common.model';

export const ValidRouteTranslator: Array<ValidRouteTranslation> = [
    { persianTitle: 'خانه', englishTitle: '' },
    { persianTitle: 'بارگزاری فایل', englishTitle: 'upload-file' },
    { persianTitle: 'داشبورد', englishTitle: 'dashboard' },
];

export const IconColor: Array<{ status: Status; class: string; color: string }> = [
    { status: 'green', class: 'green-color', color: '#6CEB01' },
    { status: 'yellow', class: 'yellow-color', color: '#FFFF00' },
    { status: 'red', class: 'red-color', color: '#DA1E38' },
    { status: 'orange', class: 'orange-color', color: '#FFA500' },
];

export const ProfitDictionary = {
    roe: 'ROE',
    roa: 'ROA',
    net: 'حاشیه‌ی سود خالص',
    operational: 'حاشیه‌ی سود عملیاتی',
};

export const ProfitURL = {
    roe: 'roe',
    roa: 'roa',
    net: 'sood-khales',
    operational: 'sood-amaliati',
};

export const ConcentrationReportURL = {
    type: 'noe-seporde',
    rate: 'nerkh-seporde',
    bank: 'bank',
    investment: 'sarmayegozari',
};

export const ConcentrationReportDictionary = {
    type: 'تمرکز نوع سپرده',
    rate: 'تمرکز نرخ سپرده',
    bank: 'تمرکز در بانک‌ها',
    investment: 'تمرکز در سرمایه‌گذاری',
};

export const Gauges: Array<{ titleEN: string; titleFA: string }> = [
    { titleEN: 'CurrentRatio', titleFA: 'نسبت جاری' },
    { titleEN: 'DebtRatio', titleFA: 'نسبت بدهی' },
    { titleEN: 'Adequacy', titleFA: 'کفایت سرمایه‌ی تمدن' },
];
