import { Component, OnInit } from '@angular/core';
import { UsuarioFormComponent } from "../usuario-form/usuario-form.component";
import { Usuarios } from '../../../model/Usuarios';
import { UsuarioService } from '../../../services/usuarios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-create',
  standalone: true,
  imports: [UsuarioFormComponent],
  templateUrl: './usuario-create.component.html',
  styleUrl: './usuario-create.component.css'
})
export class UsuarioCreateComponent implements OnInit{

  btnAcao = "Cadastrar";
  descTitulo = "Cadastrar usuario";


  constructor(private serviceUsuario: UsuarioService, private router: Router){}


  ngOnInit(): void {
  }

  criarUsuario(usuario: Usuarios){
    this.serviceUsuario.createUsuario(usuario).subscribe(usuario=>{
      this.router.navigate(['usuarios'])
    })
  }

}
