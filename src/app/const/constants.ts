import { ValidRouteTranslation } from '../models/common.model';
import { ProfitStatus } from '../components/profit/profit.model';

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
