import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          this.snackBar.open('Bienvenido de nuevo', 'Cerrar', {
            duration: 3000,
          });

          // Redirección basada en el rol
          if (res.user.role === 'comunidad') {
            this.router.navigate(['/dashboard-comunidad']);
          } else {
            this.router.navigate(['/dashboard-profesional']);
          }
        },
        error: (err) => {
          this.snackBar.open('Correo o contraseña incorrectos', 'Cerrar', {
            duration: 3000,
          });
        },
      });
    }
  }
}
