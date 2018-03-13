import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Hero } from '../../hero.service';

@Component({
  selector: 'app-angular-animations',
  templateUrl: './angular-animations.component.html',
  styleUrls: ['./angular-animations.component.css'],
  animations:[
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class AngularAnimationsComponent implements OnInit {

  heroes : Hero[] =[]
  constructor() { }

  ngOnInit() {
    for(let i=1;i<=5;i++){
      this.heroes.push({
        name : 'name'+ i.toString(),
        state : 'active'
      })
    }
  }

  toggle(state){
    console.log(state)
    state.state = state.state === 'active' ? 'inactive' : 'active';
  }
}
