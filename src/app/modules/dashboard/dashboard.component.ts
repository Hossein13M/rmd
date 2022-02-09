import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { LiquidityReportChart, LiquidityReportDescriptions, LiquidityReportForGettingData, Organization } from '../../models/common.model';
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
    public isChartShown: boolean = false;
    public liquidityReportDescriptionsInfo: Array<LiquidityReportDescriptions> = [];

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

    public prepareDataForLiquidityReports(): void {
        const reportNecessaryInfo: LiquidityReportForGettingData = {
            organization: this.form.get('organization')!.value,
            createdAt: Utils.convertDateToGregorianFormatForServer(this.form.get('createdAt')!.value),
        };

        this.getLiquidityReportDescription(reportNecessaryInfo);
        this.getLiquidityReportChart(reportNecessaryInfo);
    }

    private getLiquidityReportChart(reportNecessaryInfo: LiquidityReportForGettingData): void {
        this.appService.getLiquidityReportChart(reportNecessaryInfo.organization, reportNecessaryInfo.createdAt).subscribe((response) => {
            this.liquidityReportChartInfo = response;
            this.isChartShown = true;
        });
    }

    private getLiquidityReportDescription(reportNecessaryInfo: LiquidityReportForGettingData): void {
        this.appService
            .getLiquidityReportDescriptions(reportNecessaryInfo.organization, reportNecessaryInfo.createdAt)
            .subscribe((response) => (this.liquidityReportDescriptionsInfo = response));
    }

    private getAvailableDatesForReportsPerOrganization(organizationNationalCode: number): void {
        this.appService
            .getAvailableDatesForReports(organizationNationalCode)
            .subscribe((response) => (this.availableDatesForReportsPerOrganization = response));
    }

    public filterDatesBaseOnReportAvailability = (d: Date | null): boolean => {
        return this.availableDatesForReportsPerOrganization.includes(Utils.convertDateToGregorianFormatForServer(d!));
    };
}
