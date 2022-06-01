import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
// import { NodenumberService } from '../service/nodenumber.service';


export class portfolio{
  constructor(
    public name:string,
    public code:string,
    public unitPrice:number,
    public quantity:number
  ){}
}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  portfolioDetails: portfolio[];
  nodeNumber : string
  username : string;
  constructor(private httpClient:HttpClient) { 
    // this.nodeNumber = this.nodenumerService.getNodenumber();
    // this.nodenumerService.nodeNumber$.subscribe(nodeNumber => this.nodeNumber = nodeNumber);
    this.nodeNumber = localStorage.getItem('nodenumber');
    this.username = localStorage.getItem('username');
  }

  ngOnInit(): void {
    this.getPortfolioDetails();
    console.log('node', this.nodeNumber);
  }

  getPortfolioDetails()
  {
    this.httpClient.get<any>('http://localhost:'+this.nodeNumber+'/holdings').subscribe(
      response=>{
        console.log(response);
        this.portfolioDetails=response;
      }
    )
  }
}
