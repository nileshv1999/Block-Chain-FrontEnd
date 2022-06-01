import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from './issue-token/Token';

@Injectable({
  providedIn: 'root'
})
export class AddTokenService {

  _url='http://localhost:3001/issue-token';
  constructor(private _http:HttpClient) { }

  addToken(token:Token)
  {
    return this._http.post<any>(this._url,token);
  }
}
