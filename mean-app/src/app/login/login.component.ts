import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any = {
            mail:'',
            pass:''
  }
  constructor(public loginservice: LoginService) { }

  ngOnInit() {
  }
  signIn(){
    console.log(this.user);
    this.loginservice.login(this.user.mail,this.user.pass).subscribe( response => {

    });
  }

}
