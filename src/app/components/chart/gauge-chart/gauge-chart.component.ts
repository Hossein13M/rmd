import { Component, Inject, Input, NgZone, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';
import { Utils } from '../../../utils';
import { Status } from '../../../models/common.model';

@Component({
    selector: 'app-gauge-chart',
    templateUrl: './gauge-chart.component.html',
    styleUrls: ['./gauge-chart.component.scss'],
})
export class GaugeChartComponent implements OnInit {
    public chart!: am4charts.GaugeChart;
    @Input() ranges: Array<{ rangeStart: number; rangeEnd: number; rangeColor: Status }> = [];
    @Input() rangeMinMax!: { minValue: number; maxValue: number };
    @Input() handValue!: number;
    @Input() chartId!: string;
    @Input() gaugeName: string = 'نسبت بدهی';

    browserOnly(f: () => void) {
        if (isPlatformBrowser(this.platformId)) {
            this.zone.runOutsideAngular(() => f());
        }
    }

    constructor(@Inject(PLATFORM_ID) private platformId: any, private zone: NgZone) {}

    ngOnInit(): void {
        this.handValue = +this.handValue.toFixed(2);
    }

    ngAfterViewInit(): void {
        // Chart code goes in here
        this.browserOnly(() => {
            am4core.useTheme(am4themes_animated);
            this.chart = am4core.create(this.chartId, am4charts.GaugeChart);
            this.chart.rtl = true;

            // Create axis
            let axis = this.chart.xAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererCircular>());
            axis.min = this.rangeMinMax.minValue;
            axis.max = this.rangeMinMax.maxValue;
            axis.strictMinMax = true;

            // Set inner radius
            this.chart.innerRadius = -20;

            // Add ranges
            let range = axis.axisRanges.create();
            range.value = this.ranges[0].rangeStart;
            range.endValue = this.ranges[0].rangeEnd;
            range.axisFill.fillOpacity = 1;
            range.axisFill.fill = am4core.color(Utils.getColorBasedOnStatus(this.ranges[0].rangeColor, 'color'));
            range.axisFill.zIndex = -1;

            let range2 = axis.axisRanges.create();
            range2.value = this.ranges[1].rangeStart;
            range2.endValue = this.ranges[1].rangeEnd;
            range2.axisFill.fillOpacity = 1;
            range2.axisFill.fill = am4core.color(Utils.getColorBasedOnStatus(this.ranges[1].rangeColor, 'color'));
            range2.axisFill.zIndex = -1;

            let range3 = axis.axisRanges.create();
            range3.value = this.ranges[2].rangeStart;
            range3.endValue = this.ranges[2].rangeEnd;
            range3.axisFill.fillOpacity = 1;
            range3.axisFill.fill = am4core.color(Utils.getColorBasedOnStatus(this.ranges[2].rangeColor, 'color'));
            range3.axisFill.zIndex = -1;

            // Add hand

            let hand = this.chart.hands.push(new am4charts.ClockHand());
            hand.value = this.handValue;
            hand.pin.disabled = true;
            hand.fill = am4core.color(Utils.getColorBasedOnStatus(this.checkHandValueInRanges(), 'color'));
            hand.stroke = am4core.color(Utils.getColorBasedOnStatus(this.checkHandValueInRanges(), 'color'));
            hand.innerRadius = am4core.percent(20);
            hand.radius = am4core.percent(80);
            hand.startWidth = 15;

            let label = this.chart.radarContainer.createChild(am4core.Label);
            label.isMeasured = false;
            label.fontSize = 20;
            // label.x = am4core.percent(this.handValue);
            // label.y = am4core.percent(100);
            label.horizontalCenter = 'middle';
            label.verticalCenter = 'bottom';
            label.text = `${this.handValue}`;

            const legend = new am4charts.Legend();
            legend.isMeasured = false;
            legend.y = am4core.percent(100);
            legend.verticalCenter = 'bottom';
            legend.parent = this.chart.chartContainer;
            legend.data = [
                {
                    name: this.gaugeName,
                    fill: Utils.getColorBasedOnStatus(this.checkHandValueInRanges(), 'color'),
                    // fill: this.chart.colors.getIndex(0),
                },
            ];
        });
    }

    private checkHandValueInRanges(): Status {
        return this.ranges.find((item) => this.handValue >= item.rangeStart && this.handValue < item.rangeEnd)!.rangeColor;
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
