import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProblemService } from '../../services/problem.service';

@Component({
  selector: 'app-explore-problems',
  templateUrl: './explore-problems.component.html',
  styleUrls: ['./explore-problems.component.scss'],
})
export class ExploreProblemsComponent implements OnInit {
  allProblems: any[] = [];
  filteredProblems: any[] = [];

  // Listas para los filtros (Igual que en el formulario de creación)
  groupsList = [
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

  // Variables de estado de filtros
  selectedCategory: string = '';
  selectedGroups: string[] = [];

  constructor(
    private problemService: ProblemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Escucha los cambios en los parámetros de la URL
    this.route.queryParams.subscribe((params) => {
      this.selectedCategory = params['categoryProject'] || '';
      this.loadProblems();
    });
  }

  loadProblems() {
    this.problemService.getAllProblems().subscribe((data) => {
      this.allProblems = data;
      this.applyFilters();
    });
  }

  // Función para cambiar categoría desde las tarjetas
  setCategory(cat: string) {
    this.selectedCategory = this.selectedCategory === cat ? '' : cat; // Si hace clic en la misma, limpia el filtro
    this.applyFilters();
  }

  // Función para los chips de grupos prioritarios
  toggleGroup(group: string) {
    const index = this.selectedGroups.indexOf(group);
    if (index >= 0) {
      this.selectedGroups.splice(index, 1);
    } else {
      this.selectedGroups.push(group);
    }
    this.selectedGroups = [...this.selectedGroups];
    this.applyFilters();
  }

  applyFilters() {
    this.filteredProblems = this.allProblems.filter((p) => {
      const matchCategory =
        !this.selectedCategory || p.categoryProject === this.selectedCategory;

      // Filtro por grupos prioritarios (si hay alguno seleccionado)
      const matchGroups =
        this.selectedGroups.length === 0 ||
        this.selectedGroups.some((g) => p.priorityGroups?.includes(g));

      return matchCategory && matchGroups;
    });
  }

  resetFilters() {
    this.selectedCategory = '';
    this.selectedGroups = [];
    this.applyFilters();
  }

  onGroupSelect(event: any) {
    this.selectedGroups = event.value;
    this.applyFilters();
  }
}
