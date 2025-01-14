import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/response';  // Importer le type Response

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api'; // URL de l'API backend

  constructor(private http: HttpClient) {}

  // Inscription
  signup(user: { email: string; password: string }): Observable<Response> {
    return this.http.post<Response>(`${this.baseUrl}/signup`, user);
  }

  // Connexion
  login(user: { email: string; password: string }): Observable<Response> {
    return this.http.post<Response>(`${this.baseUrl}/login`, user);
  }
}
