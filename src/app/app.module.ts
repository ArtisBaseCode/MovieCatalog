import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieBoxComponent } from './components/movie-box/movie-box.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MovieComponent } from './pages/movie/movie.component';
import { AdminPannelComponent } from './pages/admin-pannel/admin-pannel.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchBarComponent,
    MovieListComponent,
    MovieBoxComponent,
    LandingPageComponent,
    DropdownComponent,
    LoginComponent,
    RegisterComponent,
    MovieComponent,
    AdminPannelComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
