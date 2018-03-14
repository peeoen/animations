import { Component, OnInit } from '@angular/core';
import { Animations } from './angular-animations.animations';
@Component({
  selector: 'app-angular-animations',
  templateUrl: './angular-animations.component.html',
  styleUrls: ['./angular-animations.component.css'],
  animations:[
    Animations.explainerAnim,
    Animations.listAnimation
  ]
})
export class AngularAnimationsComponent implements OnInit {

  items = [];

  constructor() { }

  ngOnInit() {
    this.items = ['Hey this is an item', 'Here is another one','This is awesome'];
  }

   pushItem() {
    this.items.push('Oh yeah that is awesome');
  }
  removeItem() {
    this.items.pop();
  }
}
