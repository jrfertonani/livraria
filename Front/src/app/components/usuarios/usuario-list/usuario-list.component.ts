import { Component, EventEmitter, OnInit } from '@angular/core';
import { Usuarios } from '../../../model/Usuarios';
import { UsuarioService } from '../../../services/usuarios/usuario.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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

    }



    search(event: Event){}

    deletar(id:number | undefined){}
}
