import { Component, OnInit } from '@angular/core';
import { Token } from './Token';
import { AddTokenService } from '../add-token.service';
@Component({
  selector: 'app-issue-token',
  templateUrl: './issue-token.component.html',
  styleUrls: ['./issue-token.component.css']
})
export class IssueTokenComponent implements OnInit {

  constructor(private _addTokenService:AddTokenService) { }

  ngOnInit(): void {
  }

  newToken = new Token('Purple Gas','PG',10,200);
  submitted=false;

  onSubmit()
  {
    //this.submitted=true;
    this._addTokenService.addToken(this.newToken)
      .subscribe(
        data => console.log('Success !!',data),
        error => console.error('Error !',error)
      ) 
      
    
  }
}
