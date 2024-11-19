import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Usuarios } from '../../../model/Usuarios';

@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.css'
})
export class UsuarioFormComponent implements OnInit{

  @Input() btnAcao!: string
  @Input() descTitulo!: string

  @Output() onSubmit = new EventEmitter<Usuarios>();
  @Input() dadosUsuario : Usuarios | null = null;






  usuariorForm!: FormGroup;

  ngOnInit(): void {

    this.usuariorForm = new FormGroup({
      id: new FormControl(this.dadosUsuario ? this.dadosUsuario.id : 0),
      nome: new FormControl(this.dadosUsuario ? this.dadosUsuario.nome : '')

    })
  }

  submit(){
    this.onSubmit.emit(this.usuariorForm.value);
  }

}
