import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../../model/Usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  URL = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) { }


  findALlUsuario():Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.URL);
  }



  deleteUsuario(id : number | undefined):Observable<Usuarios>{
    return this.http.delete<Usuarios>(`${this.URL}/${id}`);
  }

}
