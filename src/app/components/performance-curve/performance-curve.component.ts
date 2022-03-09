import { Component, Input, OnInit } from '@angular/core';
import { ComponentDataGetInfo } from '../../models/common.model';
import { AppService } from '../../services/app.service';
import { PerformanceCurveModel } from './performance-curve.model';

@Component({
    selector: 'app-performance-curve',
    templateUrl: './performance-curve.component.html',
    styleUrls: ['./performance-curve.component.scss'],
})
export class PerformanceCurveComponent implements OnInit {
    @Input() info!: ComponentDataGetInfo;
    public performanceCurveInfo: Array<PerformanceCurveModel> = [];

    constructor(private readonly appService: AppService) {}

    ngOnInit(): void {
        this.getPerformanceCurveData();
    }

    private getPerformanceCurveData(): void {
        this.appService.getPerformanceCurve(this.info.organization, this.info.createdAt).subscribe((response) => {
            this.performanceCurveInfo = PerformanceCurveComponent.prepareDataForChart(response);
        });
    }

    static prepareDataForChart(curveModels: Array<PerformanceCurveModel>): Array<PerformanceCurveModel> {
        curveModels.map((item) => {
            if (!item.isStroke) {
                item.value = +item.rate!;
                delete item.rate;
            } else item.rate = +item.rate!;
        });

        return curveModels.sort((a, b) => (a.yearToMaturity > b.yearToMaturity ? 1 : -1));
    }
}
