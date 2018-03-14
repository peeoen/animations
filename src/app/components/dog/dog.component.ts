import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  dogs: string[] = []
  constructor() { }

  ngOnInit() {
    // for (let i = 1; i <= 50; i++) {
    //   this.dogs.push(i.toString())
    // }
    for (let i = 1; i <= 5; i++) {
      for (let j = 1; j <= 10; j++) {
        this.dogs.push(`/assets/images/dogs/d${j}.jpg`)
      }
    }
  }
}
