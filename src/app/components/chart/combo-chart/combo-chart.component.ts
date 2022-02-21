import { AfterViewInit, Component, Inject, Input, NgZone, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import { isPlatformBrowser } from '@angular/common';
import * as am4core from '@amcharts/amcharts4/core';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
    selector: 'app-combo-chart',
    templateUrl: './combo-chart.component.html',
    styleUrls: ['./combo-chart.component.scss'],
})
export class ComboChartComponent implements OnInit, OnDestroy, AfterViewInit {
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

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        // Chart code goes in here
        this.browserOnly(() => {
            am4core.useTheme(am4themes_animated);
            let chart = am4core.create('chartdiv', am4charts.XYChart);
            chart.paddingRight = 10;
            chart.data = this.data;

            let categoryAxis: any = chart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = 'date';
            categoryAxis.title.text = 'تاریخ';
            categoryAxis.title.fontWeight = 'bold';

            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.renderer.minGridDistance = 200;

            let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.title.text = 'میلیارد تومان';

            // Create series
            let series = chart.series.push(new am4charts.ColumnSeries());
            series.dataFields.valueY = 'G1';
            series.dataFields.categoryX = 'date';
            series.name = 'جریان نقد ورودی';
            series.columns.template.tooltipText = 'جریان نقد ورودی';
            series.columns.template.fill = am4core.color('#92D050');

            let series2 = chart.series.push(new am4charts.ColumnSeries());
            series2.dataFields.valueY = 'G2';
            series2.dataFields.categoryX = 'date';
            series2.name = 'جریان نقد خروجی';
            series2.columns.template.tooltipText = 'جریان نقد خروجی';
            series2.columns.template.fill = am4core.color('#FF0000');

            let series3 = chart.series.push(new am4charts.ColumnSeries());
            series3.dataFields.valueY = 'G3';
            series3.dataFields.categoryX = 'date';
            series3.name = 'شکاف';
            series3.columns.template.tooltipText = 'شکاف';
            series3.columns.template.fill = am4core.color('#BFBFBF');

            let series4 = chart.series.push(new am4charts.LineSeries());
            series4.name = 'شکاف تجمعی';
            series4.stroke = am4core.color('#CDA2AB');
            series4.strokeWidth = 3;
            series4.dataFields.valueY = 'G4';
            series4.dataFields.categoryX = 'date';

            let series5 = chart.series.push(new am4charts.LineSeries());
            series5.name = 'شکاف حاشیه‌ای';
            series5.stroke = am4core.color('#CDA2AB');
            series5.strokeWidth = 3;
            series5.dataFields.valueY = 'G5';
            series5.dataFields.categoryX = 'date';

            this.chart = chart;
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
