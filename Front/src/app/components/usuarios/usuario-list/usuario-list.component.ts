import { Component, EventEmitter, OnInit } from '@angular/core';
import { Usuarios } from '../../../model/Usuarios';
import { UsuarioService } from '../../../services/usuarios/usuario.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-usuario-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './usuario-list.component.html',
  styleUrl: './usuario-list.component.css'
})
export class UsuarioListComponent implements OnInit{

  usuarios : Usuarios [] =[];
  usuariosGeral : Usuarios [] = [];

  constructor(private serviceUsuarios: UsuarioService){}


  ngOnInit(): void {
    this.serviceUsuarios.findALlUsuario().subscribe( usuarios =>{
        this.usuarios = usuarios;
        this.usuariosGeral = usuarios;
    })
    }

    search(event: Event){
      const target = event.target as HTMLInputElement;
      const value = target.value.toLowerCase();

      this.usuarios = this.usuariosGeral.filter(usuario => {
        return usuario.nome.toLowerCase().includes(value);
      })

    }


    deletarUsuario(id: number | undefined){
      this.serviceUsuarios.deleteUsuario(id).subscribe(usuario => {
        window.location.reload()
      })
    }

}
