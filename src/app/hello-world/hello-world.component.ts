import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  message: string = 'HI, World!';


  numbers: number[] = [1,2,3,4,5];

  condition = true;
  
  username: string;

  constructor() { }

  ngOnInit() {
  }

  onMouseClick(data){
    alert('You have selected ' + data);
  }

}
