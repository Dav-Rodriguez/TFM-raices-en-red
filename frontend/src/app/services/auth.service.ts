import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private apiUrl = 'http://localhost:3000/api/auth';
  // servidor conectado a enviroment
  private apiUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  // Registro de usuario
  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  // Login de usuario
  login(credentials: any): Observable<any> {
    return this.http
      .post<{ token: string; user: any }>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap((res) => {
          if (res.token) {
            localStorage.setItem('token', res.token);
            localStorage.setItem('user', JSON.stringify(res.user));
          }
        })
      );
  }

  // Verificar si hay una sesión activa
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Obtener datos del usuario logueado
  getUserData() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  // Cerrar sesión
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
