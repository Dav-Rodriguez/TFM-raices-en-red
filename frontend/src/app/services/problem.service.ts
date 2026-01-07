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

  // Obtener todas las publicaciones (Usuario B/Público)
  getAllProblems(): Observable<any[]> {
    const token = localStorage.getItem('token');
    if (token) {
      return this.http.get<any[]>(this.apiUrl, { headers: this.getHeaders() });
    }
    return this.http.get<any[]>(this.apiUrl); // Petición pública sin headers
  }

  //Obtener el ID de cada problemática para la ficha individual
  getProblemById(id: string): Observable<any> {
    const token = localStorage.getItem('token');
    if (token) {
      return this.http.get<any>(`${this.apiUrl}/${id}`, {
        headers: this.getHeaders(),
      });
    }
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Envío de propuestas
  sendProposal(proposalData: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 'x-auth-token': token || '' });
    return this.http.post('http://localhost:3000/api/proposals', proposalData, {
      headers,
    });
  }

  // Llamada a endpoint de propuestas recibidas
  getReceivedProposals(): Observable<any[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 'x-auth-token': token || '' });
    return this.http.get<any[]>(
      'http://localhost:3000/api/proposals/received',
      { headers }
    );
  }

  // Obtener detalle de una propuesta
  getProposalById(id: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 'x-auth-token': token || '' });
    return this.http.get<any>(`http://localhost:3000/api/proposals/${id}`, {
      headers,
    });
  }

  // Actualizar estado (Aceptar/Rechazar)
  updateProposalStatus(id: string, status: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 'x-auth-token': token || '' });
    return this.http.patch(
      `http://localhost:3000/api/proposals/${id}/status`,
      { status },
      { headers }
    );
  }

  // Actualizar Dashboard B con historial de propuestas enviadas
  getMySentProposals(): Observable<any[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 'x-auth-token': token || '' });
    return this.http.get<any[]>(
      'http://localhost:3000/api/proposals/my-proposals',
      { headers }
    );
  }
}
