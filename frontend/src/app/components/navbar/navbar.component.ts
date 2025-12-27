import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user: any = null;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Pide los datos del usuario al cargar
    this.user = this.authService.getUserData();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  // Método auxiliar para saber si es Profesional o Comunidad
  get isComunidad() {
    return this.user?.role === 'comunidad';
  }
  get isProfesional() {
    return this.user?.role === 'profesional';
  }
}
