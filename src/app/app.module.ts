import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './layout/home/home.component';
import { FavoritesComponent } from './layout/favorites/favorites.component';
import { DetailedComponent } from './weather-data/detailed/detailed.component';
import { GeneralComponent } from './weather-data/general/general.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './weather-data/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RootStoreModule } from './root-store/root-store.module';
import { FavoritesReducer } from './root-store/favorites/favorites.reducer';
import { SwitchesReducer } from './root-store/switches/switches.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FavoritesComponent,
    DetailedComponent,
    GeneralComponent,
    SearchComponent,
  ],
  imports: [
    HttpClientModule,
    MatTabsModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ favorites: FavoritesReducer, degree:SwitchesReducer}),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    RootStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
