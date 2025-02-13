import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Emprestimos } from '../../../model/Emprestimos';

@Component({
  selector: 'app-emprestimo-form',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './emprestimo-form.component.html',
  styleUrl: './emprestimo-form.component.css'
})
export class EmprestimoFormComponent implements OnInit {

  @Output()onSubmit = new EventEmitter<Emprestimos>();

  emprestimoForm!: FormGroup;


  ngOnInit(): void {
    this.emprestimoForm = new FormGroup({
      id: new FormControl(0),
      livro: new FormControl(''),
      usuario: new FormControl(''),
      dataEmprestimo: new FormControl(''),
      dataDevolucao: new FormControl(''),
      devolvido: new FormControl(false)
    });
  }

  submit() {
    this.onSubmit.emit(this.emprestimoForm.value);


    }

}
