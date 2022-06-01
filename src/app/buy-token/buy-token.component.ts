import { Component, OnInit } from '@angular/core';
import { GetTokenService } from '../get-token.service';
import { TokenSt } from './TokenSt';

@Component({
  selector: 'app-buy-token',
  templateUrl: './buy-token.component.html',
  styleUrls: ['./buy-token.component.css']
})
export class BuyTokenComponent implements OnInit {

  constructor(private _getToken:GetTokenService) { }

  ngOnInit(): void {
  }

 // token = new TokenSt('some seller',token: { 'Green Energy', 'GEN', 10, 2 });

  token = new TokenSt('some seller',{ name: 'Green Energy', code: 'GEN', unitPrice: 10, quantity: 2 });

  onSubmit()
  {
    this._getToken.buyNewToken(this.token)
      .subscribe(
        data => console.log('Success !!',data),
        error => console.error('Error !',error)
      )
      
  }
}
