import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProblemService {
  private apiUrl = 'http://localhost:3000/api/problems';

  constructor(private http: HttpClient) {}

  // Método privado para obtener los headers con el token
  private getHeaders() {
    const token = localStorage.getItem('token');
    return new HttpHeaders({ 'x-auth-token': token || '' });
  }

  // Crear problemática
  createProblem(problemData: any): Observable<any> {
    return this.http.post(this.apiUrl, problemData, {
      headers: this.getHeaders(),
    });
  }

  // Obtener mis publicaciones (Usuario A)
  getMyProblems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/me`, {
      headers: this.getHeaders(),
    });
  }

  // Obtener todas las publicaciones (Usuario B)
  getAllProblems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  //Obtener el ID de cada problemática para la ficha individual
  getProblemById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`, {
      headers: this.getHeaders(),
    });
  }
}
