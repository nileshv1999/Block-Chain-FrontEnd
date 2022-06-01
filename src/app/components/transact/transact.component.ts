import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Transaction } from 'src/app/models/transaction';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-transact',
  templateUrl: './transact.component.html',
  styleUrls: ['./transact.component.css']
})
export class TransactComponent implements OnInit {
  nodeNumber = '3001';

  transactForm : FormGroup
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.transactForm = new FormGroup({
      recipient : new  FormControl('',Validators.required),
      amount : new FormControl('', Validators.required)
    });
  }

  sendMoney(){
    // alert("send money");
    let recipient = this.transactForm.value.recipient;
    let amount = this.transactForm.controls['amount'].value;
    let transaction;

    this.apiService.transact({recipient,amount},this.nodeNumber).subscribe( t =>{
      // console.log("input" + t.input);
      // console.log("ouputs : " + t.outputs);
      // console.log("id:"+t.id );
      console.log(t);

    });
  }

}
