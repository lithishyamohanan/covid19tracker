import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getCountries():Observable<any>{
    const Url="https://api.covid19api.com/countries"
    return this.http.get<any>(Url)
  }
  getCoronaRealTimeData(country: string):Observable<any>{
    const Url="https://api.covid19api.com/total/dayone/country/"+country
    return this.http.get<any>(Url)
  }
}
