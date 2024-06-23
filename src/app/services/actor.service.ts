import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Actor } from '../models/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  private apiUrl = 'http://localhost:8080/actor';

  constructor(private http: HttpClient) {
  }

  getActeurs(): Observable<Actor[]> {
    return this.http.get<Actor[]>(`${this.apiUrl}/getActeurs`);
  }

  getActeurById(id: number): Observable<any> {
    return this.http.get<Actor>(`${this.apiUrl}/getActeurs/${id}`);
  }

  getCharactersByActor(id: number): Observable<any> {
    return this.http.get<Actor>(`${this.apiUrl}/getActeurs/${id}/characters`);
  }
}
