import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { convert } from './convert.actions';

import { Chart, CategoryScale, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js'

let HistorLabels: string[] = [];
let HistorValues: number[] = [];


@Component({
  selector: 'app-currency-main',
  templateUrl: './currency-main.component.html',
  styleUrls: ['./currency-main.component.css']
})
export class CurrencyMainComponent implements OnInit {
  count$: Observable<number>;
  convert_sub!: any;
  myChart!: Chart;

  constructor(private storeC: Store<{ count: number }>) {
    this.count$ = storeC.select('count');
  }

  convert() {
    this.storeC.dispatch(convert());
    this.setVal();
  }
  setVal() {
    this.convert_sub = this.count$.subscribe((val) => {
      console.log(val);
      console.log(this.convert_sub);
      (<HTMLInputElement>document.getElementById("toA")).value = val.toString();
    });
    this.setChartData();
    this.updateChart(HistorLabels, HistorValues, this.myChart);
    
  }

  Swap() {
    var fA, fC, tA, tC;
    fA = (<HTMLInputElement>document.getElementById("fromA")).value;
    fC = (<HTMLInputElement>document.getElementById("fromC")).value;
    tA = (<HTMLInputElement>document.getElementById("toA")).value;
    tC = (<HTMLInputElement>document.getElementById("toC")).value;

    (<HTMLInputElement>document.getElementById("fromA")).value = tA;
    (<HTMLInputElement>document.getElementById("fromC")).value = tC;

    (<HTMLInputElement>document.getElementById("toA")).value = '0';
    (<HTMLInputElement>document.getElementById("toC")).value = fC;
  }

  setChartData() {
    var curr_base = (<HTMLInputElement>document.getElementById("fromC")).value;
    
    var requestURL = `https://api.exchangerate.host/timeseries?start_date=2022-01-01&end_date=2022-02-01?base=${curr_base}`;

    var request = new XMLHttpRequest();
    request.addEventListener('load', this.setToScope)
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
  }
  setToScope(this: any) {
    var curr_target = (<HTMLInputElement>document.getElementById("toC")).value;
    HistorLabels = [];
    HistorValues = [];
    
    console.log(this.response['rates']['2022-02-01']);

    for (var date in this.response['rates']) {
      HistorLabels.push(date);
    }
    HistorLabels.map(val => {
      HistorValues.push(this.response['rates'][val][curr_target]);
    });

    console.log(HistorLabels);
    console.log(HistorValues);
  }
  updateChart(Labels: string[], Data: number[], chart: Chart){
    console.log('-------------');
    console.log(Labels);
    chart.data.labels = Labels;
    chart.data.datasets.forEach(dataset => {
      dataset.data = Data;
    });
    chart.update();
  }

  ngOnInit(): void {
    
    Chart.register(LineController, LineElement, CategoryScale, PointElement, LinearScale, Title);
    this.myChart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          data: [],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 159, 64, 1)',
          borderWidth: 3
        }]
      }
    });
    console.log(this.myChart)

    this.setVal();
  }
}
