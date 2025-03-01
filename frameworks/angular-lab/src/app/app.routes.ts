import { Routes } from '@angular/router';
import { authGuard } from './services/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { GaleryComponent } from './pages/galery/galery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CrudComponent } from './pages/crud/crud.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {  path: '' , redirectTo: 'home', pathMatch: 'full' },
    {  path: 'home', component: HomeComponent},
    {  path: 'login', component: LoginComponent},
    {  path: 'about', component: AboutComponent},
    {  path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]},
    {  path: 'galery', component: GaleryComponent, canActivate: [authGuard]},
    {  path: 'crud', component: CrudComponent, canActivate: [authGuard]},
    {  path: 'profile', component: ProfileComponent, canActivate: [authGuard]},
    {  path: '**', redirectTo: 'home', pathMatch: 'full' }
  ]
