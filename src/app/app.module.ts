import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { APP_ROUTING } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './core/authentication/auth.service';
import { JwtInterceptor } from './core/jwt.interceptor';
import { CallbackComponent } from './shared/callback/callback.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './core/authentication/auth.guard';
import { AlertService } from './core/alert/alert.service';
import { AlertComponent } from './core/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CallbackComponent,
    MessagesComponent,
    AlertComponent
  ],
  imports: [
    ReactiveFormsModule,
    APP_ROUTING,
    HttpClientModule,
    BrowserModule, NgbModule.forRoot()
  ],
  providers: [AuthService, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }, AuthGuard, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
