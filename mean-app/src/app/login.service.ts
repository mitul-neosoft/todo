import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LoginService {

  constructor(public http:Http) { }

  login(username,password){
    return this.http.post('api/login',{username,password})
           .map(res => res.json());
  }
}
