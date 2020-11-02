import { Component,OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data:any
  themeMode='dark'
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
  changeTheme(){
    console.log(this.themeMode)

    this.themeService.changeTheme(this.themeMode)
  }

  toggleThemeMode(data){
    console.log('toggle theme mode')

  }
}
