import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { LiquidityReportChart, Organization } from '../../models/common.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Utils } from '../../utils';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    public organizations: Array<Organization> = [];
    public availableDatesForReportsPerOrganization: Array<string> = [];
    public liquidityReportChartInfo: Array<LiquidityReportChart> = [];
    public form: FormGroup = this.fb.group({
        organization: [null, [Validators.required]],
        createdAt: [null, [Validators.required]],
    });

    constructor(private readonly appService: AppService, private readonly fb: FormBuilder) {}

    ngOnInit(): void {
        this.getOrganizationList();
        this.form.get('organization')?.valueChanges.subscribe((value) => this.getAvailableDatesForReportsPerOrganization(value));
    }

    private getOrganizationList(): void {
        this.appService.getOrganization().subscribe((response) => (this.organizations = response));
    }

    public getLiquidityReportChart(): void {
        const reportNecessaryInfo: { organization: string; createdAt: string } = {
            organization: this.form.get('organization')!.value,
            createdAt: Utils.convertDateToGregorianFormatForServer(this.form.get('createdAt')!.value),
        } as { organization: string; createdAt: string };
        this.appService
            .getLiquidityReportChart(reportNecessaryInfo.organization, reportNecessaryInfo.createdAt)
            .subscribe((response) => (this.liquidityReportChartInfo = response));
    }

    private getAvailableDatesForReportsPerOrganization(organizationNationalCode: number): void {
        this.appService
            .getAvailableDatesForReports(organizationNationalCode)
            .subscribe((response) => (this.availableDatesForReportsPerOrganization = response));
    }

    public myFilter = (d: Date | null): boolean => {
        return this.availableDatesForReportsPerOrganization.includes(Utils.convertDateToGregorianFormatForServer(d!));
    };
}
