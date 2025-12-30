import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ProblemService } from '../../services/problem.service';

@Component({
  selector: 'app-manage-proposal',
  templateUrl: './manage-proposal.component.html',
  styleUrls: ['./manage-proposal.component.scss'],
})
export class ManageProposalComponent implements OnInit {
  proposal: any;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private problemService: ProblemService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.problemService.getProposalById(id).subscribe({
        next: (data) => {
          this.proposal = data;
          this.loading = false;
        },
        error: () => this.snackBar.open('Error al cargar propuesta', 'Cerrar'),
      });
    }
  }

  changeStatus(newStatus: string) {
    this.problemService
      .updateProposalStatus(this.proposal._id, newStatus)
      .subscribe({
        next: () => {
          this.snackBar.open(`Propuesta ${newStatus} correctamente`, 'Cerrar', {
            duration: 3000,
          });
          this.router.navigate(['/dashboard-comunidad']);
        },
        error: () =>
          this.snackBar.open('Error al procesar la solicitud', 'Cerrar'),
      });
  }
}
