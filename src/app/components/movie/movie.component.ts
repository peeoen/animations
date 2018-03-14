import { Component, OnInit } from '@angular/core';
import { Animations } from './movie.animations';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  animations:[
    Animations.listAnimation
  ]
})
export class MovieComponent implements OnInit {

  items = [];

  constructor() { }

  ngOnInit() {
    this.items = ['Harry Potter', 'The lord of the ring','Spiderman'];
  }

   pushItem() {
    this.items.push('Comming soon!');
  }
  removeItem() {
    this.items.pop();
  }
}
