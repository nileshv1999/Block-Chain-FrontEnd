import { Component, OnInit } from '@angular/core';
// import { NodenumberService } from './service/nodenumber.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Frontend';
  nodeNumber = '';

  constructor(){
  }
  ngOnInit(): void {
    console.log("in app", this.nodeNumber);
  }

  
}
