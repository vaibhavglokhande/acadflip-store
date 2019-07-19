import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  message: string = 'HI, World!';


  numbers: number[] = [1, 2, 3, 4, 5];

  condition = true;

  username: string;

  isBackground: boolean = true;

  date: Date = new Date();

  themeClassName = 'light-theme';

  constructor() { }

  ngOnInit() {
  }

  onMouseClick(data) {
    alert('You have selected ' + data);
  }

  toggleBackground() {
    this.isBackground = !this.isBackground;
    if (this.themeClassName === 'dark-theme') {
      this.themeClassName = 'light-theme';
    } else {
      this.themeClassName = 'dark-theme';
    }
  }

}
