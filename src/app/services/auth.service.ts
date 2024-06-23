import {inject, Injectable} from '@angular/core';
import {Observable, tap} from 'rxjs';
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

const ENDPOINT = environment.endpoint;
const path = 'authentification/';

@Injectable(
  {providedIn: 'root'},
)
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {
  }

  login(credentials: { nomUtil: string, motPasse: string }): Observable<any> {
    return this.http.post<any>(`${ENDPOINT}${path}login`, credentials).pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem('authToken', response.token);
        }
      })
    );
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${ENDPOINT}${path}register`, {username, password});
  }

  logout() {
    localStorage.removeItem('authToken');
  }

  getToken() {
    return localStorage.getItem('authToken');
  }

  isAuthenticated() {
    return !!localStorage.getItem('authToken');
  }
}
