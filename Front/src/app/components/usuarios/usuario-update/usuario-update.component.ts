import { Component, OnInit } from '@angular/core';
import { UsuarioFormComponent } from "../usuario-form/usuario-form.component";
import { UsuarioService } from '../../../services/usuarios/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-update',
  standalone: true,
  imports: [UsuarioFormComponent],
  templateUrl: './usuario-update.component.html',
  styleUrl: './usuario-update.component.css'
})
export class UsuarioUpdateComponent implements OnInit{

  constructor(private serviceUsuario: UsuarioService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = Number( this.route.snapshot.paramMap.get('id'))


  }

}
