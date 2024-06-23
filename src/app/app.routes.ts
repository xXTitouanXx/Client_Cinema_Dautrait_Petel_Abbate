import {Routes} from '@angular/router';
import {ActorInformationComponent} from "./actors/actor-information/actor-information.component";
import {ActorsComponent} from "./actors/actors.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./auth/login/login.component";
import {MovieInformationComponent} from "./movies/movie-information/movie-information.component";
import {MoviesComponent} from "./movies/movies.component";
import { CharacterComponent } from './characters/characters.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, title: 'CineHub'},
  {path: 'login', component: LoginComponent, title: 'Login'},
  {path: 'movies', component: MoviesComponent, title: 'Movies'},
  {path: 'movie/:id', component: MovieInformationComponent, title: 'Movie Information'},
  {path: 'actors', component: ActorsComponent, title: 'Actors'},
  {path: 'actor/:id', component: ActorInformationComponent, title: 'Actor Information'},
  {path: 'characters', component: CharacterComponent, title: 'Characters' },
  {path: '**', redirectTo: ''}  // Redirect to home for any unknown routes
];
