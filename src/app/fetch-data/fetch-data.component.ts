import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.less']
})
export class FetchDataComponent {

  public forecasts: WeatherForecast[];

  constructor(http: HttpClient) {
    http.get<WeatherForecast[]>('https://localhost:44316/weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }

}


interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
