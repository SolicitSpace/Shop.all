import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path: '',  redirectTo: 'home', pathMatch: 'full'},
    {path: 'auth',  component: AuthComponent},
    {path: 'home',  component: HomeComponent},
    {path: '**',  component: NotFoundComponent},

];
