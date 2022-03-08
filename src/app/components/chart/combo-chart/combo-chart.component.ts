import { AfterViewInit, Component, Inject, Input, NgZone, OnDestroy, PLATFORM_ID } from '@angular/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import { isPlatformBrowser } from '@angular/common';
import * as am4core from '@amcharts/amcharts4/core';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { Utils } from '../../../utils';

am4core.useTheme(am4themes_animated);

@Component({
    selector: 'app-combo-chart',
    templateUrl: './combo-chart.component.html',
    styleUrls: ['./combo-chart.component.scss'],
})
export class ComboChartComponent implements OnDestroy, AfterViewInit {
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
        // Chart code goes in here
        this.browserOnly(() => {
            am4core.useTheme(am4themes_animated);
            this.chart = am4core.create('chartdiv', am4charts.XYChart);
            // chart.paddingRight = 20;
            this.chart.data = this.data;
            this.chart.rtl = true;

            this.chart.scrollbarX = new am4core.Scrollbar();
            this.chart.scrollbarX.parent = this.chart.bottomAxesContainer;
            this.chart.legend = new am4charts.Legend();

            let categoryAxis: any = this.chart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = 'date';
            categoryAxis.title.text = 'تاریخ';

            let valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.title.text = 'میلیارد تومان';

            // Create series
            let series = this.chart.series.push(new am4charts.ColumnSeries());
            series.dataFields.valueY = 'G1';
            series.dataFields.categoryX = 'date';
            series.name = 'جریان نقد ورودی';
            series.columns.template.tooltipText = 'جریان نقد ورودی:{G1}';
            series.columns.template.fill = am4core.color(Utils.generateRandomColor());

            let series2 = this.chart.series.push(new am4charts.ColumnSeries());
            series2.dataFields.valueY = 'G2';
            series2.dataFields.categoryX = 'date';
            series2.name = 'جریان نقد خروجی';
            series2.columns.template.tooltipText = 'جریان نقد خروجی:{G2}';
            series2.columns.template.fill = am4core.color(Utils.generateRandomColor());

            let series3 = this.chart.series.push(new am4charts.ColumnSeries());
            series3.dataFields.valueY = 'G3';
            series3.dataFields.categoryX = 'date';
            series3.name = 'شکاف';
            series3.columns.template.tooltipText = 'شکاف:{G3}';
            series3.columns.template.fill = am4core.color(Utils.generateRandomColor());

            let series4 = this.chart.series.push(new am4charts.LineSeries());
            series4.name = 'شکاف تجمعی';
            series4.stroke = am4core.color(Utils.generateRandomColor());
            series4.strokeWidth = 3;
            series4.dataFields.valueY = 'G4';
            series4.dataFields.categoryX = 'date';

            let series5 = this.chart.series.push(new am4charts.LineSeries());
            series5.name = 'شکاف حاشیه‌ای';
            series5.stroke = am4core.color(Utils.generateRandomColor());
            series5.strokeWidth = 3;
            series5.dataFields.valueY = 'G5';
            series5.dataFields.categoryX = 'date';

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
