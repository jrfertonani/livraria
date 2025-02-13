import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {


URL = 'http://localhost:8080/emprestimos';

  constructor(private http: HttpClient) { }


}
