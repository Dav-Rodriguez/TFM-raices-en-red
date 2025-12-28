import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProblemService } from '../../services/problem.service';

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
    private problemService: ProblemService, // Cambiamos HttpClient por el nuevo servicio
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
    if (this.problemForm.valid) {
      // Se llama al método del servicio en lugar de usar http.post
      this.problemService.createProblem(this.problemForm.value).subscribe({
        next: () => {
          this.snackBar.open('¡Publicación creada!', 'Cerrar', {
            duration: 3000,
          });
          this.router.navigate(['/dashboard-comunidad']);
        },
        error: (err) => {
          console.error(err);
          this.snackBar.open('Error al publicar la problemática', 'Cerrar');
        },
      });
    }
  }
}
