import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../models/movie";
import { Character } from '../models/Character';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://localhost:8080/movie';

  constructor(private http: HttpClient) {
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}/getMovies`);
  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/getMovie/${id}`);
  }

  getMoviesByGenre(id: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}/moviesbygenre/${id}`);
  }

  getGenres(): Observable<any> {
    return this.http.get(`${this.apiUrl}/genres`);
  }

  getMoviesByDirector(id: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}/moviesbydirector/${id}`);
  }

  getDirectors(): Observable<any> {
    return this.http.get(`${this.apiUrl}/directors`);
  }

  getCharactersByMovieId(id: number): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.apiUrl}/getMovie/${id}/characters`);
  }

}
