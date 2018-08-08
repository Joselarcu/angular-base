import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import { Observable, BehaviorSubject } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {

    loggedIn: boolean;
    loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);
    userProfile: any;

    auth0 = new auth0.WebAuth(
        environment.authConfig
    );
    
    constructor(private router: Router) {
    }

    private _setLoggedIn(value: boolean) {
        // Update login status subject
        this.loggedIn$.next(value);
        this.loggedIn = value;
    }


    login(): void {
        this.auth0.authorize();
    }

    logout() {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('access_token');
        localStorage.removeItem('user_detail');
        // Go back to the home route
        this.router.navigate(['/']);
    }

    public handleAuthentication(): void {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                this.setSession(authResult);
                this.getProfile();
                this.router.navigate(['/']);
            } else if (err) {
                this.router.navigate(['/']);
                console.error(err);
            }
        });
    }

    private setSession(authResult): void {
        // Set the time that the Access Token will expire at
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        this._setLoggedIn(true);
    }

    public isAuthenticated(): boolean{
        const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
        return new Date().getTime() < expiresAt;
    }

    public getProfile(): void{
        const accessToken = localStorage.getItem('access_token');
        if(!accessToken){
            throw new Error("Access Token must exist to fetch profile");
        }
        else{
            this.auth0.client.userInfo(accessToken, (err, profile) =>{
                if(profile){
                    localStorage.setItem('user_detail', JSON.stringify(profile));
                 /*    this.userProfile = profile;
                    this.subject.next(profile);  */
                }
              /*   cb(err,profile); */
            });
        }
    }

}
