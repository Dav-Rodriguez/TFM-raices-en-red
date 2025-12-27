import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard-comunidad',
  templateUrl: './dashboard-comunidad.component.html',
  styleUrls: ['./dashboard-comunidad.component.scss'],
})
export class DashboardComunidadComponent {
  user: any;
  constructor(private authService: AuthService) {
    this.user = this.authService.getUserData();
  }
}
