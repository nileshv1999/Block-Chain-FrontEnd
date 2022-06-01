import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetTokenService } from '../get-token.service';
import { TokenSt } from './TokenSt';
// import { NodenumberService } from '../service/nodenumber.service';

export class marketPlace{
  constructor(
    public name:string,
    public code:string,
    public unitPrice:number,
    public quantity:number
  ){}
}

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {

  marketPlaceDetails: marketPlace[];
  isShow=true;
  constructor(private _getToken:GetTokenService,private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getMPdetails();
  }

  getMPdetails(){
    this.httpClient.get<any>('http://localhost:3001/market-place').subscribe(
      response=>{
        console.log(response);
        this.marketPlaceDetails=response;
      }
    )
  }

   form_name:string;
   form_code:string;
   form_unitPrice:number;
   form_quantity:number;

   token = new TokenSt('some seller',{ name: '', code: '', unitPrice:0, quantity:0 });

   newToken:TokenSt;
 /**buyTokenPage(name:string,code:string,unitPrice:number)
  {
    this.router.navigate(['/buyToken']);
    this.form_name=name;
    this.form_code=code;
    this.form_unitPrice=unitPrice;
    this.buyTokenComp.formValues(this.form_name,code,unitPrice);
  }**/

  buyTokenPreFill(name:string,code:string,unitPrice:number,quantity:number)
  {
    this.isShow=false;
    this.form_name=name;
    this.form_code=code;
    this.form_unitPrice=unitPrice;
    this.form_quantity=quantity;
    
  }

  
  onSubmit()
  {
    this.newToken=new TokenSt('some seller',{ name: this.form_name, code: this.form_code, unitPrice:this.form_unitPrice, quantity:this.form_quantity });

    console.log(this.newToken);
    this._getToken.buyNewToken(this.newToken)
      .subscribe(
        data => console.log('Success !!',data),
        error => console.error('Error !',error)
      )
      
  }

  closeForm()
  {
    this.isShow=true;
  }
}
