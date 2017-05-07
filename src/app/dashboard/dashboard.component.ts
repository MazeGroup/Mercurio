import { Component, OnInit } from '@angular/core';

import { SerieGrafico } from './../models/grafico.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  serieChartPizza: SerieGrafico[];
  serieChartLine: SerieGrafico[];
  optionsChartPizza: any;
  optionsChartLine: any;

  constructor() { 
    this.serieChartLine = [];
    this.optionsChartPizza = {
      chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Browser market shares January, 2015 to May, 2015'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
    };
    this.optionsChartLine = {
      title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
      },
      subtitle: {
          text: 'Source: thesolarfoundation.com'
      },
      yAxis: {
          title: {
              text: 'Number of Employees'
          }
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
      }
    };
  }

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    
    this.serieChartLine = [];

    const valores: any[] = [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175];

    this.serieChartLine.push(new SerieGrafico('Vendas', valores));
    
    this.serieChartPizza = [];

    const valoresPizza: any[] = [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175];

    this.serieChartPizza.push(new SerieGrafico('Vendas', valoresPizza));
  }

}
