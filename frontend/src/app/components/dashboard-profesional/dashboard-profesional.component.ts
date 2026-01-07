import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { ProblemService } from '../../services/problem.service';
import { MatchModalComponent } from '../match-modal/match-modal.component';

@Component({
  selector: 'app-dashboard-profesional',
  templateUrl: './dashboard-profesional.component.html',
  styleUrls: ['./dashboard-profesional.component.scss'],
})
export class DashboardProfesionalComponent implements OnInit {
  user: any;
  allProblems: any[] = [];
  sentProposals: any[] = [];

  constructor(
    private authService: AuthService,
    private problemService: ProblemService,
    private dialog: MatDialog
  ) {
    this.user = this.authService.getUserData();
  }

  ngOnInit(): void {
    this.loadAllProblems();
    this.loadMySentProposals();
  }

  loadAllProblems() {
    this.problemService.getAllProblems().subscribe({
      next: (data) => {
        this.allProblems = data;
      },
      error: (err) =>
        console.error('Error cargando problemáticas globales', err),
    });
  }

  loadMySentProposals() {
    this.problemService.getMySentProposals().subscribe({
      next: (data) => (this.sentProposals = data),
      error: (err) => console.error('Error cargando historial', err),
    });
  }

  openMatchInfo(prop: any) {
    if (prop.status === 'Aceptada') {
      this.dialog.open(MatchModalComponent, {
        data: {
          proposal: prop,
          role: 'B',
        },
        width: '450px',
      });
    }
  }
}
