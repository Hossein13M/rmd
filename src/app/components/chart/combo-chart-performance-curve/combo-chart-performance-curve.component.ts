import { AfterViewInit, Component, Inject, Input, NgZone, OnDestroy, PLATFORM_ID } from '@angular/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import { isPlatformBrowser } from '@angular/common';
import * as am4core from '@amcharts/amcharts4/core';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { Utils } from '../../../utils';

@Component({
    selector: 'app-combo-chart-performance-curve',
    templateUrl: './combo-chart-performance-curve.component.html',
    styleUrls: ['./combo-chart-performance-curve.component.scss'],
})
export class ComboChartPerformanceCurveComponent implements OnDestroy, AfterViewInit {
    public chart!: am4charts.XYChart;
    @Input() data!: any;

    browserOnly(f: () => void) {
        if (isPlatformBrowser(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                f();
            });
        }
    }

    constructor(@Inject(PLATFORM_ID) private platformId: any, private zone: NgZone) {}

    ngAfterViewInit(): void {
        console.log(this.data);
        // Chart code goes in here
        this.browserOnly(() => {
            am4core.useTheme(am4themes_animated);
            this.chart = am4core.create('chart-performance', am4charts.XYChart);
            // chart.paddingRight = 20;
            this.chart.data = this.data;
            this.chart.rtl = true;

            this.chart.scrollbarX = new am4core.Scrollbar();
            this.chart.scrollbarX.parent = this.chart.bottomAxesContainer;
            this.chart.legend = new am4charts.Legend();

            let categoryAxis: any = this.chart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = 'yearToMaturity';
            categoryAxis.title.text = 'سال تا سررسید';

            let valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.title.text = 'درصد';

            // Create series
            let series = this.chart.series.push(new am4charts.ColumnSeries());
            series.dataFields.valueY = 'value';
            series.dataFields.categoryX = 'yearToMaturity';
            series.name = 'صندوق‌ها';
            series.columns.template.tooltipText = '{titleFA}';
            series.columns.template.fill = am4core.color(Utils.generateRandomColor());

            let series2 = this.chart.series.push(new am4charts.LineSeries());
            series2.dataFields.valueY = 'rate';
            series2.dataFields.categoryX = 'yearToMaturity';
            series2.name = 'منحنی بازده';
            series2.stroke = am4core.color('#CDA2AB');
            series2.strokeWidth = 3;

            this.chart.cursor = new am4charts.XYCursor();
            this.chart.cursor.behavior = 'zoomXY';
        });
    }

    ngOnDestroy() {
        // Clean up chart when the component is removed
        this.browserOnly(() => {
            if (this.chart) {
                this.chart.dispose();
            }
        });
    }
}
