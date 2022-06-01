import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { NodenumberService } from '../service/nodenumber.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  //submit=false;
  transactionsDetails: any[];
  constructor(private httpClient:HttpClient, private router:Router) { 
    // console.log(this.nodeNumberService.getNodenumber());
  }

  ngOnInit(): void {
   //this.settleTransactions();
  }



  settleTransactions()
  {
    this.router.navigate(['/settling']);
  }


  gotoIssueTokens()
  {
    this.router.navigate(['/issueTokens']);
  }
}
