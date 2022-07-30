import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  name = 'Hello Worlds';

  onchange(value: string) {
    this.name = value;
    console.log(this.name, value);
  }

  click() {
    console.log('Hello Worlds');
  }

  ngOnInit(): void {}
}
