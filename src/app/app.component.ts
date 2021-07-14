import { Component } from '@angular/core';
import {DataService} from './services/data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid19tracker';
  countries:any
  country:any
  confirmed!: Number;
  recovered!: Number;
  deaths!: Number;
  constructor(private dataservice: DataService){}

  ngOnInit() {
    this.dataservice.getCountries().subscribe((data)=>{
      console.log(data);
      this.countries=data
    })
  }
  getCoronaData(){
    this.dataservice.getCoronaRealTimeData(this.country).subscribe((data)=>{
      console.log(data)
      var index=data.length-1;
      this.confirmed=data[index].Confirmed;
      this.recovered=data[index].Recovered;
      this.deaths=data[index].Deaths;
    })
  }
  getCountry(event:any){
   this.country=event.target.value;
  }
}
