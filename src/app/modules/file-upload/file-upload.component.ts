import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../../services/app.service';
import { Organization, Report } from '../../models/common.model';
import { Utils } from '../../utils';

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements OnInit {
    public organizations: Array<Organization> = [];
    public reportType: Array<Report> = [];
    public form: FormGroup = this.fb.group({
        organization: [null, [Validators.required]],
        reportType: [null, [Validators.required]],
        reportTypeId: [null, [Validators.required]],
        type: [null, [Validators.required]],
        date: [new Date(Date.now()), [Validators.required]],
        file: [null, [Validators.required]],
    });

    constructor(private readonly appService: AppService, private readonly fb: FormBuilder) {}

    ngOnInit(): void {
        this.getOrganizationList();
        this.form.get('organization')?.valueChanges.subscribe((value) => this.getReportTypes(value));
    }

    private getOrganizationList(): void {
        this.appService.getOrganization().subscribe((response) => (this.organizations = response));
    }

    private getReportTypes(organizationCode: string): void {
        this.appService.getReportTypes(organizationCode).subscribe((response) => (this.reportType = response));
    }

    private findReportTypeName(reportTypeId: number): string {
        return this.reportType.find((reportType) => reportType.id === reportTypeId)!.name;
    }

    public uploadFile(): void {
        this.form.get('reportType')?.setValue(this.findReportTypeName(this.form.value.reportTypeId));
        const reportInfo = this.form.value;
        reportInfo.date = Utils.convertDateToGregorianFormatForServer(reportInfo.date);
        const formData: FormData = new FormData();
        Object.keys(reportInfo).map((key) => formData.append(key, reportInfo[key]));

        this.appService.uploadReport(formData).subscribe(() => console.log('success'));
    }

    public triggerFileSelect(): void {
        document.getElementById('uploadFile')?.click();
    }

    public uploadFiles(event: any) {
        this.form.get('file')!.setValue(event.files[0]);
    }
}
