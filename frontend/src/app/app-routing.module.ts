import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProblemComponent } from './components/create-problem/create-problem.component';
import { DashboardComunidadComponent } from './components/dashboard-comunidad/dashboard-comunidad.component';
import { DashboardProfesionalComponent } from './components/dashboard-profesional/dashboard-profesional.component';
import { ExploreProblemsComponent } from './components/explore-problems/explore-problems.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { ManageProposalComponent } from './components/manage-proposal/manage-proposal.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { SbnArticleDetailComponent } from './components/sbn-article-detail/sbn-article-detail.component';
import { SbnArticlesListComponent } from './components/sbn-articles-list/sbn-articles-list.component';
import { SbnRepositoryComponent } from './components/sbn-repository/sbn-repository.component';
import { SendProposalComponent } from './components/send-proposal/send-proposal.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard-comunidad', component: DashboardComunidadComponent },
  { path: 'dashboard-profesional', component: DashboardProfesionalComponent },
  { path: 'create-problem', component: CreateProblemComponent },
  { path: 'dashboard-profesional', component: DashboardProfesionalComponent },
  { path: 'explore-problems', component: ExploreProblemsComponent },
  { path: 'problem-detail/:id', component: ProblemDetailComponent },
  { path: 'send-proposal/:problemId', component: SendProposalComponent },
  { path: 'manage-proposal/:id', component: ManageProposalComponent },
  { path: 'repository', component: SbnRepositoryComponent },
  { path: 'sbn-detail/:id', component: SbnArticleDetailComponent },
  { path: 'sbn-results/:id', component: SbnArticlesListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
