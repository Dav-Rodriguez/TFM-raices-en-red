import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Para capturar el :id
import { ProblemService } from '../../services/problem.service';

@Component({
  selector: 'app-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.scss'],
})
export class ProblemDetailComponent implements OnInit {
  problem: any; // se guarda la respuesta de la DB
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private problemService: ProblemService
  ) {}

  ngOnInit(): void {
    // Se obtiene el ID desde la ruta
    const id = this.route.snapshot.paramMap.get('id');

    // Si el ID existe, llamamos al servicio
    if (id) {
      this.problemService.getProblemById(id).subscribe({
        next: (data) => {
          this.problem = data;
          this.loading = false;
        },
        error: (err) => {
          console.error('Error al cargar el detalle', err);
          this.loading = false;
        },
      });
    }
  }
}
