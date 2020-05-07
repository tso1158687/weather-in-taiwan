import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  url = environment.cwbApiUrl
  weatherElement='&elementName=PoP12h,Wx,MaxT,MinT'
  options = {
    params: new HttpParams().set('Authorization', environment.cwbAccessKey),
  };
  constructor(private http: HttpClient) {}
  // 範例資料
  // https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-1711E839-6B6F-4528-933D-6E520E6FE59D&locationName=%E5%AE%9C%E8%98%AD%E7%B8%A3,%E8%8A%B1%E8%93%AE%E7%B8%A3
  getWeatherData() {
    let a=encodeURIComponent('新北市')
    console.log('a')
    console.log(a)
    return this.http.get<any>(this.url,this.options).pipe(map(e=>e.records.locations[0].location));
  }
}
