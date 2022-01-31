import { HttpParams } from '@angular/common/http';
import { formatDate } from '@angular/common';

export class Utils {
  constructor() {}

  static prepareParamsFromObjectsForAPICalls(searchParams: any): HttpParams {
    let params: HttpParams = new HttpParams();
    Object.keys(searchParams).map((key: string) => {
      if (Array.isArray(searchParams[key]))
        searchParams[key].forEach(
          (element: any) => (params = params.append(key, element))
        );
      else if (searchParams[key] !== '')
        params = params.append(key, searchParams[key]);
    });
    return params;
  }

  static convertDateToGregorianFormatForServer(date: Date): string {
    return formatDate(date, 'yyyy-MM-dd', 'en_US');
  }

  static convertDateToPersianDateString(date: Date): string {
    return new Date(date).toLocaleDateString('fa-Ir', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}
