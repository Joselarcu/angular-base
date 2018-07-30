import { CreateUserComponent } from './user/create-user/create-user.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: CreateUserComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);