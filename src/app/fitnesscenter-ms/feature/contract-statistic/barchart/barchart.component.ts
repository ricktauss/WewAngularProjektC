import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'fitness-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit, OnDestroy {
  @Input() outdatedContracts: number | null = null;
  @Input() validContracts: number | null = null;
  @Input() events: Observable<void> | null = null;
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  eventsSubscription: Subscription | null = null;

  constructor() { }

  ngOnInit(): void {
    this.refresh();
    this.eventsSubscription = this.events!.subscribe(() => this.refresh());
  }

  ngOnDestroy() {
    this.eventsSubscription!.unsubscribe();
  }


  // ADD CHART OPTIONS.
  chartOptions = {
    responsive: true,   // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
    maintainAspectRatio: false
  }

  labels = ['Contract status'];

  // STATIC DATA FOR THE CHART IN JSON FORMAT.
  chartData = [
    {
      label: 'outdated',
      data: [this.outdatedContracts]
    },
    {
      label: 'valid',
      data: [this.validContracts]
    }
  ];

  refresh(): void {
    this.chartData = [
      {
        label: 'outdated',
        data: [this.outdatedContracts]
      },
      {
        label: 'valid',
        data: [this.validContracts]
      }
    ];
    this.chart?.chart?.update();
  }

}
