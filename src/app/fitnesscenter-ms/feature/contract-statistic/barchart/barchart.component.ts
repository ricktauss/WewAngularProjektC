import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fitness-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  @Input() outdatedContracts: number | null = null;
  @Input() validContracts: number | null = null;

  constructor() { }

  ngOnInit(): void {

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
      //data: [this.outdatedContracts]
      data: [this.outdatedContracts]
    },
    {
      label: 'valid',
      //data: [this.validContracts]
      data: [this.validContracts]
    }
  ];

}
