import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    console.log('Login...');
    this.errorMessage = null
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Login', response);
        if (response && response.token) {
          sessionStorage.setItem('token', response.token)
          sessionStorage.setItem('role', response.user.role.toString())
          sessionStorage.setItem('name', response.user.name)

          this.router.navigate(['/'])
        }
      },
      (error) => {
        console.error('Failed', error);
        this.errorMessage = 'Usuario o contraseña incorrectos'
      }
    );
  }
}
