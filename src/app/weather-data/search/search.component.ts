import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { debounceTime, tap, switchMap, finalize, filter } from 'rxjs/operators';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchCitiesCtrl = new FormControl('', Validators.required);
  filteredCities: any;
  isLoading = false;
  errorMsg: string;
  @Output() searchedCity = new EventEmitter();
  constructor(private ApiService:ApiService) { }

  ngOnInit() {
    this.searchCitiesCtrl.valueChanges
      .pipe(
        debounceTime(500),
        filter(value => value.length>2),
        tap(() => {
          this.errorMsg = "";
          this.filteredCities = [];
          this.isLoading = true;
        }),
        switchMap(value => this.ApiService.getAutocompleteRes(value)
          .pipe(
            finalize(() => {
              this.isLoading = false
            }),
          )
        )
      )
      .subscribe(data => {
        if (data == undefined) {
          this.errorMsg = data['Error'];
          this.filteredCities = [];
        } else {
          this.errorMsg = "";
          this.filteredCities.push(data);
        }
      },err=>{
        console.log(err)
      });
  }
  displayWeather(selectedCity){
    this.searchedCity.emit(selectedCity.option.value)
  }
  displayFn(cityObj): string {
    return cityObj? cityObj.LocalizedName+', '+cityObj.Country.LocalizedName: cityObj;
  }

}
