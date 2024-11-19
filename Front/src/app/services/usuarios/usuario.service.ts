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

  createUsuario(usuario : Usuarios):Observable<Usuarios>{
    return this.http.post<Usuarios>(this.URL, usuario);
  }

  findALlUsuario():Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.URL);
  }

  findByIdUsuario(id: number):Observable<Usuarios>{
    return this.http.get<Usuarios>(`${this.URL}/${id}`);
  }

  updateUsuario(usuario: Usuarios):Observable<Usuarios>{
    const up = `${this.URL}/${usuario.id}`;
    return this.http.put<Usuarios>(up,usuario);

  }


  deleteUsuario(id : number | undefined):Observable<Usuarios>{
    return this.http.delete<Usuarios>(`${this.URL}/${id}`);
  }

}
