import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Currentconditions } from 'src/app/models/currentconditions';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { FavoritesAdd } from 'src/app/root-store/favorites/favorites.actions';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites: Observable<Map<string,Currentconditions>>;
  favoritesData: any[];
  constructor(private ApiService: ApiService, private store: Store<{ favorites: Map<string,Currentconditions>}>) {
    this.favorites = store.pipe(select('favorites'));
  }

  ngOnInit() {
    this.getFavorites()
  }
  getFavorites(){
    let arr=[]
    this.favorites.subscribe(data=>{
        data.forEach((cityName,citykey)=>{
          this.ApiService.getTodaysInfo(citykey).subscribe((response)=>{
            let city={cityName:cityName,cityKey:citykey}
            arr.push(new Currentconditions(response[0],city))
          })
        })
    }, error=>{
      console.log(error)
    })
    this.favoritesData=arr
  }

}
