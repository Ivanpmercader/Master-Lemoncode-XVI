import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  validLogin: boolean = false;
  loginForm!: FormGroup;
  loginUsername!: FormControl;
  loginPassword!: FormControl;

  constructor(private router: Router, private _authService: AuthService) {
    this.createLoginForm();
   }
   
  createLoginForm(): void{
    this.loginForm = new FormGroup({});
    this.loginUsername = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.loginPassword = new FormControl('', [Validators.required]);

    this.loginForm.addControl('username', this.loginUsername);
    this.loginForm.addControl('password', this.loginPassword);
  }

  validateLogin():void{
    const user: User = {username: this.loginUsername.value, password: this.loginPassword.value};
    this._authService.login(user) ? this.onLoginSuccess(): this.onLoginFailed();
  }

  onLoginFailed():void{
    const username = this.loginForm.get('username');
    const password = this.loginForm.get('password');
    if (username) username.setErrors({login_failed: true});
    if (password) password.setErrors({login_failed: true});
    this.loginForm.setErrors({login_failed: true});
  }

  onLoginSuccess():void {
    this.router.navigate(['/dashboard']);
  }
}
