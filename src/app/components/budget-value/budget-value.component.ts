import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { ComponentDataGetInfo } from '../../models/common.model';
import { BudgetValueResponse } from './BudgetValue.model';

@Component({
    selector: 'app-budget-value',
    templateUrl: './budget-value.component.html',
    styleUrls: ['./budget-value.component.scss'],
})
export class BudgetValueComponent implements OnInit {
    @Input() info!: ComponentDataGetInfo;
    public budgetValue!: BudgetValueResponse;
    public hasComponentContainData: boolean = false;

    constructor(private readonly appService: AppService) {}

    ngOnInit(): void {
        this.getBudgetValueReport();
    }

    private getBudgetValueReport(): void {
        this.appService.getBudgetAndValueReport(this.info.organization, this.info.createdAt).subscribe((response) => {
            this.budgetValue = response;
            this.hasComponentContainData = !!response.data.length;
        });
    }
}
