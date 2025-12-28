import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProblemService } from '../../services/problem.service';

@Component({
  selector: 'app-dashboard-profesional',
  templateUrl: './dashboard-profesional.component.html',
  styleUrls: ['./dashboard-profesional.component.scss'],
})
export class DashboardProfesionalComponent implements OnInit {
  user: any;
  allProblems: any[] = [];

  constructor(
    private authService: AuthService,
    private problemService: ProblemService
  ) {
    this.user = this.authService.getUserData();
  }

  ngOnInit(): void {
    this.loadAllProblems();
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
}
