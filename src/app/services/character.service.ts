import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character, CharacterCreateDTO, CharacterUpdateDTO } from '../models/Character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'http://localhost:8080/character';

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.apiUrl}/getCharacters`);
  }

  createCharacter(character: CharacterCreateDTO): Observable<any> {
    return this.http.post(`${this.apiUrl}`, character);
  }

  updateCharacter(character: CharacterUpdateDTO): Observable<any> {
    return this.http.put(`${this.apiUrl}`, character);
  }

  deleteCharacter(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
