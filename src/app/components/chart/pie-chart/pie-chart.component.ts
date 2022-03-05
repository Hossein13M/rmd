import { Component, Inject, Input, NgZone, OnInit, PLATFORM_ID } from '@angular/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import { isPlatformBrowser } from '@angular/common';
import * as am4core from '@amcharts/amcharts4/core';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
    selector: 'app-pie-chart',
    templateUrl: './pie-chart.component.html',
    styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
    public chart!: am4charts.PieChart;
    @Input() data: Array<{ titleFA: string; value: number }> = [
        { titleFA: 'سلام', value: 50 },
        { titleFA: 'شبیشسب', value: 90 },
        { titleFA: 'شبیبششسبشب', value: 30 },
    ];
    @Input() chartId!: string;
    @Input() hasLegend: boolean = true;
    @Input() pieChartHeight: string = '400px';

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
            this.chart = am4core.create(this.chartId, am4charts.PieChart);
            this.chart.data = this.data;
            this.chart.innerRadius = am4core.percent(60);
            this.chart.rtl = true;

            let pieSeries = this.chart.series.push(new am4charts.PieSeries());
            pieSeries.slices.template.stroke = am4core.color('#4a2abb');
            pieSeries.slices.template.strokeWidth = 2;
            pieSeries.slices.template.strokeOpacity = 1;
            pieSeries.dataFields.value = 'value';
            pieSeries.dataFields.category = 'titleFA';

            if (this.hasLegend) {
                this.chart.legend = new am4charts.Legend();
                this.chart.legend.maxHeight = 100;
                this.chart.legend.scrollable = true;
            }
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
