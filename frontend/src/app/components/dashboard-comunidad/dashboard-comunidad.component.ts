import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProblemService } from 'src/app/services/problem.service';

@Component({
  selector: 'app-dashboard-comunidad',
  templateUrl: './dashboard-comunidad.component.html',
  styleUrls: ['./dashboard-comunidad.component.scss'],
})
export class DashboardComunidadComponent implements OnInit {
  user: any;
  myProblems: any[] = [];
  receivedProposals: any[] = [];

  constructor(
    private authService: AuthService,
    private problemService: ProblemService
  ) {
    this.user = this.authService.getUserData();
  }

  ngOnInit(): void {
    this.loadMyProblems();
    this.loadProposals();
  }

  loadMyProblems() {
    this.problemService.getMyProblems().subscribe({
      next: (data) => {
        this.myProblems = data;
        console.log('Mis problemas cargados:', data);
      },
      error: (err) => {
        console.error('Error cargando problemas', err);
      },
    });
  }

  loadProposals() {
    this.problemService.getReceivedProposals().subscribe({
      next: (data) => (this.receivedProposals = data),
      error: (err) => console.error('Error cargando propuestas', err),
    });
  }
}
