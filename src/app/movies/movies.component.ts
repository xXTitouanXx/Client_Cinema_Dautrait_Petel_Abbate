import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router, RouterLink} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {Movie} from "../models/movie";
import {MovieService} from "../services/movie.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(
      (data) => {
        this.movies = data;
      },
      (error) => {
        console.error('Error fetching movies', error);
      }
    );
  }
}
