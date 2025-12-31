import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ProblemService } from '../../services/problem.service';
import { MatchModalComponent } from '../match-modal/match-modal.component';

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
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadProposal(id);
    }
  }

  loadProposal(id: string) {
    this.problemService.getProposalById(id).subscribe({
      next: (data) => {
        this.proposal = data;
        this.loading = false;

        if (this.proposal.status === 'Aceptada') {
          this.openSuccessModal();
        }
      },
      error: () => this.snackBar.open('Error al cargar propuesta', 'Cerrar'),
    });
  }

  openSuccessModal() {
    this.dialog.open(MatchModalComponent, {
      data: { proposal: this.proposal, role: 'A' },
      width: '450px',
      disableClose: false,
    });
  }

  changeStatus(newStatus: string) {
    this.problemService
      .updateProposalStatus(this.proposal._id, newStatus)
      .subscribe({
        next: (updatedProp) => {
          this.proposal.status = newStatus;

          this.snackBar.open(`Propuesta ${newStatus} correctamente`, 'Cerrar', {
            duration: 3000,
          });

          if (newStatus === 'Aceptada') {
            this.openSuccessModal();
          } else {
            this.router.navigate(['/dashboard-comunidad']);
          }
        },
        error: () =>
          this.snackBar.open('Error al procesar la solicitud', 'Cerrar'),
      });
  }
}
