import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ventas';
  public barChartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true
  };
  public barChartLabels: string[] = ['January', 'February', 'March', 'April'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData: any[] = [
    {data: [65, 59, 80, 81], label: 'Ventas'}
  ];
  chart = [];
  cat = ['Repuestos', 'Partes'];
  prod = ['Llantas', 'Motores'];
  marca = ['Chain', 'Tesla'];
  catActual = 'Repuestos';
  prodActual = 'Llantas';
  marcaActual = 'Chain';
  data = {
    'Repuestos': {
      'Llantas': {
        'Chain': [520, 340, 540, 230],
        'Tesla': [420, 260, 490, 320]},
      'Motores': {
        'V6': [240, 520, 350, 460],
        'V8': [520, 360, 420, 120]}
      },
    'Partes': {
      'Ventiladoras': {
        'CoolerMaster': [520, 660, 450, 360],
        'Serco': [120, 350, 420, 190]},
      'CPU\'s': {
        'I\'9': [590, 400, 520, 630],
        'I\'3': [430, 260, 460, 120]}
    }
  };

  constructor() {  }

  updateCat(arr) {
    this.catActual = arr;
    if (arr === 'Repuestos') {
      this.prod = ['Llantas', 'Motores'];
      this.marca = ['Chain', 'Tesla'];
    } else {
      this.prod = ['Ventiladoras', 'CPU\'s'];
      this.marca = ['CoolerMaster', 'Serco'];
    }
    this.updateProd(this.prod[0]);
  }

  updateProd(arr) {
    this.prodActual = arr;
    if (arr === 'Llantas') {
      this.marca = ['Chain', 'Tesla'];
    } else if (arr === 'Motores') {
      this.marca = ['V6', 'V8'];
    } else if (arr === 'Ventiladoras') {
      this.marca = ['CoolerMaster', 'Serco'];
    } else {
      this.marca = ['I\'9', 'I\'3'];
    }
    this.updateMarca(this.marca[0]);
  }

  updateMarca(arr) {
    this.marcaActual = arr;
    this.graph();
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public graph(): void {
    // Only Change 3 values
    const data = this.data[this.catActual][this.prodActual][this.marcaActual];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }
}
