import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Currentconditions } from 'src/app/models/currentconditions';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.css']
})
export class DetailedComponent implements OnInit {
  @Input() forecasts
  degreeM
  heart: boolean=false
  constructor(private store: Store<{favorites: Map<string,Currentconditions>,degree:boolean}>, private router:Router) {}

  ngOnInit() {
    this.store.pipe(select('degree')).subscribe(data=>{
      this.degreeM=data
    })
  }
  
}
