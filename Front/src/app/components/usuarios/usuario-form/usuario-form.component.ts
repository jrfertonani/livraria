import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  @Output() onSubmit = new EventEmitter<Usuarios>();




  usuariorForm!: FormGroup;

  ngOnInit(): void {

    this.usuariorForm = new FormGroup({
      id: new FormControl(0),
      nome: new FormControl('')

    })
  }

  submit(){
    this.onSubmit.emit(this.usuariorForm.value);
  }

}
