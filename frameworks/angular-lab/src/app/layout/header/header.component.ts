import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { PublicMenuComponent } from '../../components/public-menu/public-menu.component';
import { PrivateMenuComponent } from '../../components/private-menu/private-menu.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, PublicMenuComponent, PrivateMenuComponent, MatToolbarModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  logged: boolean = false;
  subscription: Subscription | null  = null;
  userLogged: string | null = null;

  constructor(private _authService: AuthService, private router: Router) {
    this.subscription = this._authService.isLoggedObservable().subscribe( isLogged =>
      {
          this.logged = isLogged;
          this.userLogged = this._authService.getUsername();
      }
    );
  }
  
  logout() {
    this._authService.logout();
    this.router.navigate(['/home']);
  }
}
