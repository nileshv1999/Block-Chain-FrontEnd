import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { TokenSt } from './buy-token/TokenSt';

@Injectable({
  providedIn: 'root'
})
export class GetTokenService {

  nodeNumber : string;

  _url: string;
  constructor(private _http:HttpClient) { 
    this.nodeNumber = localStorage.getItem('nodenumber');
    this._url = 'http://localhost:'+ this.nodeNumber +'/buy';
  }

  buyNewToken(token:TokenSt)
  {
    return this._http.post<any>(this._url,token);
  }
}
