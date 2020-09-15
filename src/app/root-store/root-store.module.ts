import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesModule } from './favorites/favorites.module';
import { SwitchesModule } from './switches/switches.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FavoritesModule,
    SwitchesModule
  ]
})
export class RootStoreModule { }
