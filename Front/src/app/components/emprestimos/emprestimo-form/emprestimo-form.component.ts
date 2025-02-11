import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-emprestimo-form',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './emprestimo-form.component.html',
  styleUrl: './emprestimo-form.component.css'
})
export class EmprestimoFormComponent implements OnInit {


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

}
