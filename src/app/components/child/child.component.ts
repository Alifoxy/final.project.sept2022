import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
  name = 'Max'
  hey_there():void{
    console.log('hey_there');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

}
