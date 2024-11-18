import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livros } from '../../model/Livros';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  URL = environment.URL;

  constructor(private http: HttpClient) { }


GetLivros():Observable<Livros[]>{
  return this.http.get<Livros[]>(this.URL);
}

}
