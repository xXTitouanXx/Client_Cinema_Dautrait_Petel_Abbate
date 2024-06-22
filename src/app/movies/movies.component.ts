import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {MovieService} from "../services/movie.service";
import {CommonModule} from "@angular/common";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  genres: any[] = [];
  directors: any[] = [];
  filterGenreForm: FormGroup;
  filterDirectorForm: FormGroup;

  constructor(private movieService: MovieService) {
    this.filterGenreForm = new FormGroup({
      selectedGenreId: new FormControl(null)
    });
    this.filterDirectorForm = new FormGroup({
      selectedDirectorId: new FormControl(null)
    });
   }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(
      (data) => {
        this.movies = data;
      },
      (error) => {
        console.error('Error fetching movies', error);
      }
    );
    
    this.movieService.getGenres().subscribe(data => {
      this.genres = data;
    });
    
    this.movieService.getDirectors().subscribe(data => {
      this.directors = data;
    });

    this.filterGenreForm.get('selectedGenreId')?.valueChanges.subscribe(genreId => {
      this.movieService.getMoviesByGenre(genreId).subscribe(data => {
        this.movies = data;
        this.filterDirectorForm.setValue({selectedDirectorId: null})
      });
    });
    
    this.filterDirectorForm.get('selectedDirectorId')?.valueChanges.subscribe(directorId => {
      this.movieService.getMoviesByDirector(directorId).subscribe(data => {
        this.movies = data;
        this.filterGenreForm.setValue({selectedGenreId: null})
      });
    });
  }
}
