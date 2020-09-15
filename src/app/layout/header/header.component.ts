import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChangeDegree } from 'src/app/root-store/switches/switches.actions';
import { Currentconditions } from 'src/app/models/currentconditions';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store<{favorites: Map<string,Currentconditions>,degree:boolean}>) { }

  ngOnInit() {
  }
  switchDegree(){
    this.store.dispatch(new ChangeDegree({}))
  }
  switchTheme(){
    if(document.body.classList.contains('dark')){
      document.body.classList.remove('dark')
    }else{
      document.body.classList.add('dark')
    }
  }

}
