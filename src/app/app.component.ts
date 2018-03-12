import { Component,OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  data:string[] = []
  constructor(){
  
  }

  ngOnInit(){
    AOS.init();

    for(let i=1;i<=50;i++){
      this.data.push(i.toString())
    }
  }
}
