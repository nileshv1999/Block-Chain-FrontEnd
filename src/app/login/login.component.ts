import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { NodenumberService } from '../service/nodenumber.service';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  userName:string;
  password:string;
  nodeNumber : string;

  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  LoginUser()
  {
    if(this.userName=="admin" && this.password=="admin123")
    {
      console.log("welcome");
      this.nodeNumber = '3001';
      localStorage.setItem('nodenumber','3001');
      localStorage.setItem('username','admin');
      this.router.navigate(['/admin']);
    }
    else if(this.userName=="nilesh" && this.password=="nilesh123")
    {
      this.nodeNumber = '3002';
      localStorage.setItem('nodenumber','3002');
      localStorage.setItem('username','nilesh');
      this.router.navigate(['/home']);
    }
    else if(this.userName=="akshay" && this.password=="akshay123")
    {
      this.nodeNumber = '3003';
      localStorage.setItem('nodenumber','3003');
      localStorage.setItem('username','akshay');
      this.router.navigate(['/home']);
    }
  }

  

}
