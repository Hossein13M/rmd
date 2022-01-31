import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Organization, Report, ReportInfo } from '../../models/common.model';

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
    type: [1, [Validators.required]],
    date: [Date.now(), [Validators.required]],
    file: [null, [Validators.required]],
  });

  constructor(
    private readonly appService: AppService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getOrganizationList();
    this.form
      .get('organization')
      ?.valueChanges.subscribe((value) => this.getReportTypes(value));
  }

  private getOrganizationList(): void {
    this.appService
      .getOrganization()
      .subscribe((response) => (this.organizations = response));
  }

  private getReportTypes(organizationCode: string): void {
    this.appService
      .getReportTypes(organizationCode)
      .subscribe((response) => (this.reportType = response));
  }

  public uploadFile(): void {
    const reportInfo = this.form.value as ReportInfo;
    this.appService
      .uploadReport(reportInfo)
      .subscribe(() => console.log('success'));
  }
}
