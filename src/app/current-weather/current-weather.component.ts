import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'

import { ICurrentWeather } from '../interfaces'
import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather
  constructor(private httpClient: HttpClient, private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService
      .getCurrentWeather('Greenville', 'US')
      .subscribe((data) => (this.current = data))
  }
}
