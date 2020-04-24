import { Component,OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-in-taiwan';
  constructor(
    private weatherService:WeatherService
  ){}
  ngOnInit(){
    console.log('init')
    this.weatherService.getWeatherData().subscribe(e=>{
      console.log('weather data')
      console.log(e)
    })
  }
}
