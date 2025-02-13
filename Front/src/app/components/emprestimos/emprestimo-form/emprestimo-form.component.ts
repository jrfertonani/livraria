import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Input() dadosEmprestimo: Emprestimos | null = null;
  @Output()onSubmit = new EventEmitter<Emprestimos>();

  emprestimoForm!: FormGroup;


  ngOnInit(): void {

    console.log(3);

    this.emprestimoForm = new FormGroup({
      id: new FormControl(this.dadosEmprestimo ? this.dadosEmprestimo.id : 0),
      livro: new FormControl(this.dadosEmprestimo ? this.dadosEmprestimo.livro.autor : ''),
      usuario: new FormControl(this.dadosEmprestimo ? this.dadosEmprestimo.usuario.nome : ''),
      dataEmprestimo: new FormControl(this.dadosEmprestimo ? this.dadosEmprestimo.dataEmprestimo : 0),
      dataDevolucao: new FormControl(this.dadosEmprestimo ? this.dadosEmprestimo.dataDevolucao : 0),
      devolvido: new FormControl(this.dadosEmprestimo ? this.dadosEmprestimo.devolvido : false)
    });
  }

  submit() {
    this.onSubmit.emit(this.emprestimoForm.value);


    }

}
