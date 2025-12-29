import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ProblemService } from '../../services/problem.service';

@Component({
  selector: 'app-send-proposal',
  templateUrl: './send-proposal.component.html',
  styleUrls: ['./send-proposal.component.scss'],
})
export class SendProposalComponent implements OnInit {
  proposalForm!: FormGroup;
  problem: any;

  specialties = [
    'Arquitectura y urbanismo',
    'Ciencias ambientales',
    'Ingeniería',
    'Ciencias sociales',
    'Educación ambiental',
  ];
  modalities = ['presencial', 'híbrido', 'remoto'];
  programs = [
    'Voluntariado',
    'Pasantía',
    'Primer proyecto profesional',
    'Vinculación',
  ];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private problemService: ProblemService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const problemId = this.route.snapshot.paramMap.get('problemId');
    if (problemId) {
      this.loadProblem(problemId);
      this.initForm(problemId);
    }
  }

  initForm(problemId: string) {
    this.proposalForm = this.fb.group({
      problem: [problemId],
      title: ['', Validators.required],
      motivation: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      specialty: ['', Validators.required],
      modality: ['', Validators.required],
      programType: ['', Validators.required],
    });
  }

  loadProblem(id: string) {
    this.problemService
      .getProblemById(id)
      .subscribe((data) => (this.problem = data));
  }

  onSubmit() {
    if (this.proposalForm.valid) {
      this.problemService.sendProposal(this.proposalForm.value).subscribe({
        next: () => {
          this.snackBar.open('¡Propuesta enviada con éxito!', 'Cerrar', {
            duration: 3000,
          });
          this.router.navigate(['/dashboard-profesional']);
        },
        error: () => this.snackBar.open('Error al enviar propuesta', 'Cerrar'),
      });
    }
  }
}
