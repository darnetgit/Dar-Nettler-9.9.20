import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Forecasts } from 'src/app/models/forecasts';
import { Currentconditions } from 'src/app/models/currentconditions';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { resolve } from 'url';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  forecasts: Forecasts[];
  city: any

  constructor(private ApiService:ApiService, private router: Router) {
    if(this.router.getCurrentNavigation().extras.state){
      this.displayCityData(this.router.getCurrentNavigation().extras.state)
    }else{
      navigator.geolocation.getCurrentPosition(position=> {
        let obs=this.ApiService.getCurrentLocation(position.coords.latitude+ "%2C" +position.coords.longitude)
        obs.subscribe(response=>{
          this.displayCityData({LocalizedName:response['LocalizedName'],Key: response['Key']})
        })
      }, err=>{
        this.displayCityData({LocalizedName:'Tel- Aviv', Key:'215854'})
      });
    }
   }
  ngOnInit() {
  }
  displayCityData(city){
    let currentCity={cityName:city.LocalizedName,cityKey: city.Key}
    this.getCurrentWeather(currentCity)
    this.getDetailedWeather(currentCity.cityKey)
  }
  getCurrentWeather(currentCity){
    this.ApiService.getTodaysInfo(currentCity.cityKey).subscribe(response=>{
      let conditions=new Currentconditions(response[0],currentCity);
      this.city=conditions
    }, err=>{
      console.log(err)
    })
  }
  getDetailedWeather(cityKey){
    this.ApiService.getNext5DaysInfo(cityKey).subscribe(response => {
      let days = [];
      if(!response['DailyForecasts'])
        console.log('error getting next5DaysInfo')
      response['DailyForecasts'].forEach(day => {
        days.push(new Forecasts(day))
      });
      this.forecasts=days
    },err=>{
      console.log(err)
    });
  }
}
