import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-problem',
  templateUrl: './create-problem.component.html',
  styleUrls: ['./create-problem.component.scss'],
})
export class CreateProblemComponent {
  problemForm: FormGroup;

  categories = [
    'Agua',
    'Ambiente',
    'Alimentación',
    'Hábitat',
    'Riesgos Climáticos',
    'Fauna',
  ];
  groups = [
    'Infancias y adolescencias',
    'Mujeres',
    'Pueblos indígenas y comunidades ancestrales',
    'Personas afrodescendientes',
    'Personas con discapacidad',
    'Diversidades sexuales y de género',
    'Personas mayores',
    'Personas migrantes o en movilidad humana',
    'Comunidad en general',
    'Otro grupo prioritario',
  ];
  helpTypes = [
    'Diagnóstico',
    'Diseño de soluciones',
    'Construcción',
    'Capacitación',
  ];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.problemForm = this.fb.group({
      title: ['', Validators.required],
      communityName: ['', Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required],
      categoryProject: ['', Validators.required],
      priorityGroups: [[]],
      helpType: [[]],
      exchangeProposal: ['', Validators.required],
    });
  }

  onSubmit() {
    const token = localStorage.getItem('token');
    const headers = { 'x-auth-token': token || '' };

    if (this.problemForm.valid) {
      this.http
        .post('http://localhost:3000/api/problems', this.problemForm.value, {
          headers,
        })
        .subscribe({
          next: () => {
            this.snackBar.open('¡Publicación creada!', 'Cerrar', {
              duration: 3000,
            });
            this.router.navigate(['/dashboard-comunidad']);
          },
          error: () => this.snackBar.open('Error al publicar', 'Cerrar'),
        });
    }
  }
}
