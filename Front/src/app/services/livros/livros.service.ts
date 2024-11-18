import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livros } from '../../model/Livros';
import { Response } from '../../model/Response';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  URL = 'http://localhost:8080/livros';

  constructor(private http: HttpClient) { }


getLivros():Observable<Livros[]>{
  return this.http.get<Livros[]>(this.URL);
}


deletar(id: number | undefined):Observable<Livros>{
  return this.http.delete<Livros>(`${this.URL}/${id}`);
}

}
