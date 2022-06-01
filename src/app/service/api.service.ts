import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PublicKey } from '../models/publicKey';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL : String;

  constructor(private http : HttpClient) {
    this.API_URL = 'http://localhost';
   }

   public getBalance(nodeNumber : string){
     return this.http.get(this.API_URL + ":" + nodeNumber+ "/balance");
   }

   public getPublicKey(nodeNumber : string) {
     return this.http.get<PublicKey>(this.API_URL + ":" + nodeNumber+ "/public-key");
   }

   public transact(transactionDetails : any, nodeNumber:string){
    return this.http.post<Transaction>(this.API_URL+":"+nodeNumber + "/transact",transactionDetails);
   }

   public getHttpPort (nodeNumber : string){
     return this.http.get<string>(this.API_URL+":"+nodeNumber + "/http-port");
   }

   public getP2pPort(nodeNumber:string){
     return this.http.get<string>(this.API_URL+":"+nodeNumber+"/p2p-port");
   }
}
