import {Routes} from '@angular/router';
import {ActorInformationComponent} from "./actors/actor-information/actor-information.component";
import {ActorsComponent} from "./actors/actors.component";
import {SearchResultComponent} from "./search-result/search-result.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./auth/login/login.component";
import {MovieInformationComponent} from "./movies/movie-information/movie-information.component";
import {MoviesComponent} from "./movies/movies.component";

export const routes: Routes = [
  {path: '', component: HomeComponent, title: 'CineHub'},
  {path: 'login', component: LoginComponent, title: 'Login'},
  {path: 'search', component: SearchResultComponent, title: 'Search'},
  {path: 'movies', component: MoviesComponent, title: 'Movies'},
  {path: 'movie/:id', component: MovieInformationComponent, title: 'Movie Information'},
  {path: 'actors', component: ActorsComponent, title: 'Actors'},
  {path: 'actor/:id', component: ActorInformationComponent, title: 'Actor Information'},
  {path: '**', redirectTo: ''}  // Redirect to home for any unknown routes
];
