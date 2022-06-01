import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settling-transactions',
  templateUrl: './settling-transactions.component.html',
  styleUrls: ['./settling-transactions.component.css']
})
export class SettlingTransactionsComponent implements OnInit {

  transactionsDetails: any[];
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  settleTransactions()
  {
    //if(this.submit==true)
    {
    this.httpClient.get<any>('http://localhost:3001/settle').subscribe(
      response=>{
        console.log(response);
        console.log("settled");
        this.transactionsDetails=response;
      })
    }
  }

}
