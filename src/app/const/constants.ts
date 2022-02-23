import { ValidRouteTranslation } from '../models/common.model';
import { ProfitStatus } from '../components/profit/profitBaseModel';

export const ValidRouteTranslator: Array<ValidRouteTranslation> = [
    { persianTitle: 'خانه', englishTitle: '' },
    { persianTitle: 'بارگزاری فایل', englishTitle: 'upload-file' },
    { persianTitle: 'داشبورد', englishTitle: 'dashboard' },
];

export const IconColor: Array<{ status: ProfitStatus; class: string }> = [
    { status: 'Green', class: 'green-color' },
    { status: 'Yellow', class: 'yellow-color' },
    { status: 'Red', class: 'red-color' },
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
