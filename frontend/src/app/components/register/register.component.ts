import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    // Se define el formulario con las mismas validaciones que el backend
    this.registerForm = this.fb.group({
      names: ['', Validators.required],
      lastnames: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
      communityName: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
        next: (res) => {
          this.snackBar.open(
            '¡Registro exitoso! Ya puedes iniciar sesión',
            'Cerrar',
            { duration: 3000 }
          );
          this.router.navigate(['/login']);
        },
        error: (err) => {
          this.snackBar.open(
            err.error.msg || 'Error en el registro',
            'Cerrar',
            { duration: 3000 }
          );
        },
      });
    }
  }
}
