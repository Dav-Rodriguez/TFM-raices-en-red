import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProblemComponent } from './components/create-problem/create-problem.component';
import { DashboardComunidadComponent } from './components/dashboard-comunidad/dashboard-comunidad.component';
import { DashboardProfesionalComponent } from './components/dashboard-profesional/dashboard-profesional.component';
import { ExploreProblemsComponent } from './components/explore-problems/explore-problems.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { ManageProposalComponent } from './components/manage-proposal/manage-proposal.component';
import { MatchModalComponent } from './components/match-modal/match-modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { SendProposalComponent } from './components/send-proposal/send-proposal.component';
import { LandingComponent } from './components/landing/landing.component';
import { SbnRepositoryComponent } from './components/sbn-repository/sbn-repository.component';
import { SbnArticlesListComponent } from './components/sbn-articles-list/sbn-articles-list.component';
import { SbnArticleDetailComponent } from './components/sbn-article-detail/sbn-article-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComunidadComponent,
    DashboardProfesionalComponent,
    NavbarComponent,
    FooterComponent,
    CreateProblemComponent,
    ExploreProblemsComponent,
    ProblemDetailComponent,
    SendProposalComponent,
    ManageProposalComponent,
    MatchModalComponent,
    LandingComponent,
    SbnRepositoryComponent,
    SbnArticlesListComponent,
    SbnArticleDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    // Material Modules
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatMenuModule,
    MatDividerModule,
    MatChipsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
