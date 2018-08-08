import { MessagesComponent } from './messages/messages.component';
import { CallbackComponent } from './shared/callback/callback.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/authentication/auth.guard';


const APP_ROUTES: Routes = [
    { path: 'callback', component: CallbackComponent },
    { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard]}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);