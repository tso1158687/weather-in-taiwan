import { Component,OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-in-taiwan';
  data:any
  selectedItemNgModel
  constructor(
    private themeService: NbThemeService,
    private weatherService:WeatherService
  ){}
  ngOnInit(){
    console.log('init')
    this.weatherService.getWeatherData().subscribe(e=>{
      console.log('weather data')
      console.log(e)
      this.data=e.filter(e=>e.locationName==='新北市')
      console.log(this.data)
    })
  }
  changeTheme(themeName){
    this.themeService.changeTheme(themeName)
  }
}
