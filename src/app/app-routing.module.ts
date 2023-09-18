import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MovieComponent } from './pages/movie/movie.component';
import { AdminPannelComponent } from './pages/admin-pannel/admin-pannel.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [{ path: 'admin-pannel', component: AdminPannelComponent }],
  },

  { path: 'landing-page', component: LandingPageComponent },
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'movie/:id', component: MovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
