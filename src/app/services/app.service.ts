import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Organization, Report } from '../models/common.model';

@Injectable()
export class AppService {
  constructor(private readonly http: HttpClient) {}

  public getOrganization(): Observable<Array<Organization>> {
    return this.http.get<Array<Organization>>(`/api/organization`);
  }

  public getReportTypes(organizationCode: string): Observable<Array<Report>> {
    return this.http.get<Array<Report>>(
      `/api/report-type?organization=${organizationCode}`
    );
  }
}
