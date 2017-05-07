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
            text: 'Indicador de vendas por produto'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
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
        text: 'Indicador de vendas'
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

    const valores: any[] = [10, 15, 8, 13, 14, 17, 13, 10, 21];

    this.serieChartLine.push(new SerieGrafico('Vendas', valores));
    
    this.serieChartPizza = [];

    const valoresPizza: any[] = [{y:10, name: 'Smart TV LED 32 Philips'},
                                     {y:15, name:'Poster Com Moldura 8-Bit Life - Rosa'}, 
                                     {y:8, name:'Livro - Uma Pergunta por dia Para Mães'}, 
                                     {y:13, name:'Toca Discos de Vinil'}, 
                                     {y:14, name:'Porta Lápis Stormtrooper Star Wars'}, 
                                     {y:17, name:'Cafeteira - Nespresso'}, 
                                     {y:13, name:'Funko Pop Batman Vs Superman Mulher '}, 
                                     {y:10, name:'Caderno De Anotações Com Elástico Cavalo Pegasus'}];

    this.serieChartPizza.push(new SerieGrafico('Vendas', valoresPizza));
  }

}
