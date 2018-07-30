import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor( private router: Router) { 

  }

  login(email: string, password: string){
  }

  logout(){

  }

  checkCredentials(){

  }



}
