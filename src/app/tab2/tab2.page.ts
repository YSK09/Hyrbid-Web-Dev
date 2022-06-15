import { DetailPage } from './../detail/detail.page';
import { WeatherService } from '../services/weather.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],

})

export class Tab2Page implements OnInit {
  public forecast = [];
  public whList=[];
  route: Router;
  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {
    this.weatherService.getForecast().subscribe((data: any) => {
      this.forecast = data.list;
      console.log(this.forecast);
    });
  }

  detailpage(w:any):void{
    let weather= {
      date: w.dt_txt,
      temp: w.main.temp,
      main: w.weather[0].main,
      desc: w.weather[0].description,
      icon: w.weather[0].icon,
    }
    let extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(weather)
      }
    };
    this.route.navigate(['/detail'], extras);
  }
}
