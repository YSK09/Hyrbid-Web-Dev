import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  url = 'https://api.openweathermap.org/data/2.5/';
  key = 'f588862b066c86b7e9fd1ead177089f0';
  city = 'Klaten';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(`${this.url}weather?q=${this.city}&appid=${this.key}&units=metric`);
  }
  getForecast() {
    return this.http.get(`${this.url}forecast?q=${this.city}&appid=${this.key}&units=metric`);
  }
}
