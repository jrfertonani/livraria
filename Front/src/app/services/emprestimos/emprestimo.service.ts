import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emprestimos } from '../../model/Emprestimos';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {
  serviceEmprestimo() {
    throw new Error('Method not implemented.');
  }


URL = 'http://localhost:8080/emprestimos';

  constructor(private http: HttpClient) { }

  getEmprestimos(): Observable<Emprestimos[]> {
    return this.http.get<Emprestimos[]>(this.URL);

  }
  deletarEmprestimo(id:number | undefined): Observable<Emprestimos[]>{
    return this.http.delete<Emprestimos[]>(`${this.URL}/${id}`);

  }

  criarEmprestimo(emprestimo: Emprestimos): Observable<Emprestimos[]>{
    return this.http.post<Emprestimos[]>(this.URL, emprestimo);
  }


  getEmprestimoId(id:number | undefined): Observable<Emprestimos>{
    return this.http.get<Emprestimos>(`${this.URL}/${id}`);
  }


}
