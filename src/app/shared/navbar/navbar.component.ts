import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/authentication/auth.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'bs-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  userInfo: any;


  constructor(private authService: AuthService) {
   
   }

  ngOnInit() {
   /*  this.authService.user$.subscribe(res => this.userInfo = res); */
  
  }

  login(formValue) :void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }

  isAuthenticated() : boolean{
    return this.authService.isAuthenticated();
  }

  getUserDetail() : Object{
    return JSON.parse(localStorage.getItem('user_detail'));
    // return this.authService.userProfile;
  }

  

}
