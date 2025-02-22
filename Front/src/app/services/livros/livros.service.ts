import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livros } from '../../model/Livros';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  URL = 'http://localhost:8080/livros';

  constructor(private http: HttpClient) { }


createLivros(livro: Livros):Observable<Livros>{
  return this.http.post<Livros>(this.URL,livro);
}

getLivros():Observable<Livros[]>{
  return this.http.get<Livros[]>(this.URL);
}

getLivrosById(id: number):Observable<Livros>{
  return this.http.get<Livros>(`${this.URL}/${id}`);
}

updateLivros(livro: Livros):Observable<Livros>{
  const up = `${this.URL}/${livro.id}`;
  return this.http.put<Livros>(up,livro);
}


deletar(id: number | undefined):Observable<Livros>{
  return this.http.delete<Livros>(`${this.URL}/${id}`);
}


}
