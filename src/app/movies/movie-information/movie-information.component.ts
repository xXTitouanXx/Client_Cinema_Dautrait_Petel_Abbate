import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-movie-information',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './movie-information.component.html',
  styleUrl: './movie-information.component.scss'
})
export class MovieInformationComponent implements OnInit {
  movie: Movie | undefined;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (id) {
        this.movieService.getMovieById(id).subscribe(movie => {
          this.movie = movie;
        });
      }
    });
  }
}
