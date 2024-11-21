import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emprestimos } from '../../model/Emprestimos';

@Injectable({
  providedIn: 'root'
})
export class EmprestimosService {

  URL = 'http://localhost:8080/emprestimo';

  constructor(private http: HttpClient) { }


  createEmprestimo(emprestimo: Emprestimos):Observable<Emprestimos>{
    return this.http.post<Emprestimos>(this.URL,emprestimo);
  }


  getEmprestimo():Observable<Emprestimos[]>{
    return this.http.get<Emprestimos[]>(this.URL);
  }

  deleteEmprestimo(id: number | undefined):Observable<Emprestimos>{
    return this.http.delete<Emprestimos>(`${this.URL}/${id}`);

  }

}
