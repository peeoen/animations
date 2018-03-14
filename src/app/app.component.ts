import { Component,OnInit } from '@angular/core';
import { Animaions } from './app.animation';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    Animaions.routeAnimation
  ]
})
export class AppComponent implements OnInit  {

  data:string[] = []
  constructor(){
  
  }

  ngOnInit(){
    AOS.init();

  }


  getDepth(outlet){
    return outlet.activatedRouteData['depth']
  }
}
