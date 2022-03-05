import { Status, ValidRouteTranslation } from '../models/common.model';

export const ValidRouteTranslator: Array<ValidRouteTranslation> = [
    { persianTitle: 'خانه', englishTitle: '' },
    { persianTitle: 'بارگزاری فایل', englishTitle: 'upload-file' },
    { persianTitle: 'داشبورد', englishTitle: 'dashboard' },
];

export const IconColor: Array<{ status: Status; class: string }> = [
    { status: 'green', class: 'green-color' },
    { status: 'yellow', class: 'yellow-color' },
    { status: 'red', class: 'red-color' },
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
