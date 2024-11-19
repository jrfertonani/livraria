import { Component, OnInit } from '@angular/core';
import { UsuarioFormComponent } from "../usuario-form/usuario-form.component";
import { UsuarioService } from '../../../services/usuarios/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuarios } from '../../../model/Usuarios';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario-update',
  standalone: true,
  imports: [UsuarioFormComponent, CommonModule],
  templateUrl: './usuario-update.component.html',
  styleUrl: './usuario-update.component.css'
})
export class UsuarioUpdateComponent implements OnInit{

  btnAcao = "Editar";
  descTitulo = "Editar usuario"


  usuario! : Usuarios;

  constructor(private serviceUsuario: UsuarioService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = Number( this.route.snapshot.paramMap.get('id'))

    this.serviceUsuario.findByIdUsuario(id).subscribe(usuario=>{
      this.usuario = usuario;
    })
  }

  editarUsuario(usuario: Usuarios){
    this.serviceUsuario.updateUsuario(usuario).subscribe(usuario=>{
      this.router.navigate(['usuarios'])
    })
  }
}
