import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Emprestimos } from '../../../model/Emprestimos';
import { identity } from 'rxjs';

@Component({
  selector: 'app-emp-form',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './emp-form.component.html',
  styleUrl: './emp-form.component.css'
})
export class EmpFormComponent implements OnInit{

  @Output() onSubmit = new EventEmitter<Emprestimos>();



  emprestimoForm!: FormGroup;


  ngOnInit(): void {
    this.emprestimoForm = new FormGroup({
      id: new FormGroup(0),
      tituloLivro: new FormGroup(0),
      nomeUsuario: new FormGroup(0),
      dataEmprestimo: new FormGroup(0),
      dataDevolucao: new FormGroup(0),
      devolvido: new FormGroup(false)
    });
  }


  submit(){
    this.onSubmit.emit(this.emprestimoForm.value);
  }



}
