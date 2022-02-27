import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LiquidityReportChart, LiquidityReportDescriptionsNew, Organization, Report } from '../models/common.model';
import { ContractsListModel } from '../components/contracts-list/contracts-list.model';
import { BudgetValueResponse } from '../components/budget-value/BudgetValue.model';

@Injectable()
export class AppService {
    constructor(private readonly http: HttpClient) {}

    public getOrganization(): Observable<Array<Organization>> {
        return this.http.get<Array<Organization>>(`/api/organization`);
    }

    public getReportTypes(organizationCode: string): Observable<Array<Report>> {
        return this.http.get<Array<Report>>(`/api/report-type?organization=${organizationCode}`);
    }

    public uploadReport(reportData: any): Observable<any> {
        return this.http.post<any>(`/api/upload-report`, reportData);
    }

    public getAvailableDatesForReports(organizationNationalCode: number): Observable<Array<string>> {
        return this.http.get<Array<string>>(`/api/organization/report-dates?organization=${organizationNationalCode}`);
    }

    public getLiquidityReportChart(organization: string, createdAt: string): Observable<Array<LiquidityReportChart>> {
        // Liquidity = نقدینگی
        return this.http.get<Array<LiquidityReportChart>>(`/api/dashboard/naghdinegi/chart?organization=${organization}&createdAt=${createdAt}`);
    }

    public getLiquidityReportDescriptions(organization: string, createdAt: string): Observable<Array<LiquidityReportDescriptionsNew>> {
        // Liquidity = نقدینگی
        return this.http.get<Array<LiquidityReportDescriptionsNew>>(
            `/api/dashboard/naghdinegi/descriptions?organization=${organization}&createdAt=${createdAt}`
        );
    }

    public getContractsList(organization: string, createdAt: string): Observable<Array<ContractsListModel>> {
        return this.http.get<Array<ContractsListModel>>(`/api/dashboard/gharardad?organization=${organization}&createdAt=${createdAt}`);
    }

    public getProfitReport(organization: string, createdAt: string, url: string): Observable<any> {
        return this.http.get<any>(`/api/dashboard/${url}?organization=${organization}&createdAt=${createdAt}`);
    }

    public getBudgetAndValueReport(organization: string, createdAt: string): Observable<BudgetValueResponse> {
        return this.http.get<BudgetValueResponse>(`/api/dashboard/daramad-hazine?organization=${organization}&createdAt=${createdAt}`);
    }
}
