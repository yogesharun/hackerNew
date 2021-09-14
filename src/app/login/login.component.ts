import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public log:any;
public user1:any;
  constructor() {
    if(sessionStorage.length>0){
      this.log = true;
      this.user1 = sessionStorage.getItem("user");
    }
   }
cred(user:any)
{
  this.log=true;
  sessionStorage.setItem("user",user);
  console.log(user)
  this.user1=user
  console.log(sessionStorage.getItem("user"))
}
logout()
{
  this.log=false;
  sessionStorage.clear()
  console.log(sessionStorage.getItem("user"))
}
  ngOnInit(): void {
  }

}
