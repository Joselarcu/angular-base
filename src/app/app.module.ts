import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { APP_ROUTING } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './core/authentication/auth.service';
import { AlertComponent } from './shared/alert/alert.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { HTTP_INTERCEPTORS } from '../../node_modules/@angular/common/http';
import { JwtInterceptor } from './core/jwt.interceptor';
import { ErrorInterceptor } from './core/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AlertComponent,
    CreateUserComponent
  ],
  imports: [
    ReactiveFormsModule,
    APP_ROUTING,
    BrowserModule, NgbModule.forRoot()
  ],
  providers: [AuthService, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
