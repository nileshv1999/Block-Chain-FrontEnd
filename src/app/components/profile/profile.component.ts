import { Component, OnInit } from '@angular/core';
import { PublicKey } from 'src/app/models/publicKey';
import { ApiService } from 'src/app/service/api.service';
// import { NodenumberService } from 'src/app/service/nodenumber.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // nodeNumer = '3001'; //temp variable for testing, remove this when done;

  nodeNumber = '';

  publicKey : any;
  balance;
  httpPort;
  p2pPort;
  username = localStorage.getItem('username');
  constructor(private apiService : ApiService) {
    this.nodeNumber = localStorage.getItem('nodenumber');
   }

  ngOnInit(): void {
    // this.nodeNumber = this.nodeNumberService.getNodenumber();
   console.log('this.nodeNumber ',this.nodeNumber);
    this.apiService.getPublicKey(this.nodeNumber).subscribe(pubKey  => {
      this.publicKey = pubKey.publicKey;
    });
    this.apiService.getBalance(this.nodeNumber).subscribe(bal => {
      this.balance =bal;
    });

    this.apiService.getHttpPort(this.nodeNumber).subscribe(httpPort => {
      this.httpPort=httpPort;
    });

    this.apiService.getP2pPort(this.nodeNumber).subscribe(p2pPort => {
      this.p2pPort = p2pPort;
    });
  }

}
