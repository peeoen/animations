import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  constructor() { }
cats : string[] = []
  ngOnInit() {
    for(let i=1;i<=8;i++){
      this.cats.push(`/assets/images/cats/c${i}.jpg`)
    }
  }

}
