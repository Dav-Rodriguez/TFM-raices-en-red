import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard-profesional',
  templateUrl: './dashboard-profesional.component.html',
  styleUrls: ['./dashboard-profesional.component.scss'],
})
export class DashboardProfesionalComponent {
  user: any;
  constructor(private authService: AuthService) {
    this.user = this.authService.getUserData();
  }
}
