import * as am4core from '@amcharts/amcharts4/core';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { AfterViewInit, Component, Inject, Input, NgZone, OnDestroy, PLATFORM_ID } from '@angular/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import { isPlatformBrowser } from '@angular/common';

am4core.useTheme(am4themes_animated);

@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnDestroy, AfterViewInit {
    public chart!: am4charts.XYChart;
    @Input() data!: Array<{ name: string; value: string }>;
    @Input() chartId!: string;
    @Input() horizontalAxisName: string = '';
    @Input() verticalAxisName: string = '';

    browserOnly(f: () => void) {
        if (isPlatformBrowser(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                f();
            });
        }
    }

    constructor(@Inject(PLATFORM_ID) private platformId: any, private zone: NgZone) {}

    ngAfterViewInit(): void {
        // Chart code goes in here
        this.browserOnly(() => {
            am4core.useTheme(am4themes_animated);
            this.chart = am4core.create(this.chartId, am4charts.XYChart);
            this.chart.data = this.data;
            this.chart.rtl = true;

            let categoryAxis: any = this.chart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = 'name';

            this.chart.yAxes.push(new am4charts.ValueAxis());

            // Create series
            let series = this.chart.series.push(new am4charts.ColumnSeries());
            series.dataFields.valueY = 'value';
            series.dataFields.categoryX = 'name';
            series.name = 'Sales';
            series.columns.template.tooltipText = '{name}:{valueY}';
            series.columns.template.adapter.add('fill', (fill, target) => {
                return target.dataItem ? this.chart.colors.getIndex(target.dataItem.index) : fill;
            });
            // series.columns.template.fill = am4core.color(Utils.generateRandomColor());

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
