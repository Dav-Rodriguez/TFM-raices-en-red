import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProblemComponent } from './components/create-problem/create-problem.component';
import { DashboardComunidadComponent } from './components/dashboard-comunidad/dashboard-comunidad.component';
import { DashboardProfesionalComponent } from './components/dashboard-profesional/dashboard-profesional.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard-comunidad', component: DashboardComunidadComponent },
  { path: 'dashboard-profesional', component: DashboardProfesionalComponent },
  { path: 'create-problem', component: CreateProblemComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
