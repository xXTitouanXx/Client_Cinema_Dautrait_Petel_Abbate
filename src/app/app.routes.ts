import { Routes } from '@angular/router';
import {ActorInformationComponent} from "./actors/actor-information/actor-information.component";
import {ActorsComponent} from "./actors/actors.component";
import {SearchResultComponent} from "./search-result/search-result.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./auth/login/login.component";
import {MovieInformationComponent} from "./movies/movie-information/movie-information.component";
import {MoviesComponent} from "./movies/movies.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchResultComponent },
  { path: 'movies', component: MoviesComponent},
  { path: 'movie/:id', component: MovieInformationComponent },
  { path: 'actors', component: ActorsComponent },
  { path: 'actor/:id', component: ActorInformationComponent },
  { path: '**', redirectTo: '' }  // Redirect to home for any unknown routes
];
