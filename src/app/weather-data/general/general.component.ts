import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FavoritesAdd, FavoritesRemove } from 'src/app/root-store/favorites/favorites.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit,OnChanges {
  @Input() favButton
  degreeM: boolean=false
  heart: boolean=false
  favorites: Map<string,string>
  @Input() city

  constructor(private store: Store<{favorites: Map<string,string>,degree:boolean}>, private router:Router) { 
  }

  ngOnInit() {
    this.store.pipe(select('degree')).subscribe(data=>{
      this.degreeM=data
    })
    this.store.pipe(select('favorites')).subscribe(data=>{
      this.favorites=data
      if(this.favorites.has(this.city.key)){
        this.heart=true
      }
    })
  }
  ngOnChanges(){
    if(this.favorites && this.favorites.has(this.city.key)){
      this.heart=true
    }else{
      this.heart=false
    }
  }

  favorite(){
    if(this.favorites.has(this.city.key)){
      this.heart=false
      this.store.dispatch(new FavoritesRemove(this.city.key))
    }else{
      this.heart=true
      this.store.dispatch(new FavoritesAdd({key:this.city.key,name:this.city.name}));
    }
  }

  displayCityInHome(citykey,cityname){
    this.router.navigateByUrl('/',{state: {Key:citykey,LocalizedName:cityname}});
  }
}
