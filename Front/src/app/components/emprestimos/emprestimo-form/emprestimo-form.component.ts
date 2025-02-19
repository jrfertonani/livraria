import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Emprestimos } from '../../../model/Emprestimos';
import { Livros } from '../../../model/Livros';
import { UsuarioService } from '../../../services/usuarios/usuario.service';
import { CommonModule } from '@angular/common';
import { LivrosService } from '../../../services/livros/livros.service';
import { Usuarios } from '../../../model/Usuarios';

@Component({
  selector: 'app-emprestimo-form',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './emprestimo-form.component.html',
  styleUrl: './emprestimo-form.component.css'
})
export class EmprestimoFormComponent implements OnInit {


  @Input() btnAcao!: string;
  @Input() descTitulo!: string;

  @Input() dadosEmprestimo: Emprestimos | null = null;

  @Output()onSubmit = new EventEmitter<Emprestimos>();

  @Input() dadosUsuarios: Usuarios | null = null;
  @Input() dadosLivros: Livros | null = null;


  emprestimoForm!: FormGroup;

  usuarioForm!: FormGroup;
  livrosForm!: FormGroup;

  usuarios?:any;
  livros?: any;

  constructor(private serviceUsuario: UsuarioService, private serviceLivro: LivrosService) { }



  ngOnInit(): void {

    console.log(3);

    this.emprestimoForm = new FormGroup({
      id: new FormControl(this.dadosEmprestimo ? this.dadosEmprestimo.id : 0),
      livro: new FormControl(this.dadosEmprestimo ? this.dadosEmprestimo.livro.titulo : ''),
      usuario: new FormControl(this.dadosEmprestimo ? this.dadosEmprestimo.usuario.nome : ''),
      dataEmprestimo: new FormControl(this.dadosEmprestimo ? this.dadosEmprestimo.dataEmprestimo : 0),
      dataDevolucao: new FormControl(this.dadosEmprestimo ? this.dadosEmprestimo.dataDevolucao : 0),
      situacao: new FormControl(this.dadosEmprestimo ? this.dadosEmprestimo.devolvido : false)
    });

    this.usuarioForm = new FormGroup({
      id: new FormControl(this.dadosUsuarios ? this.dadosUsuarios.id : 0),
      nome: new FormControl(this.dadosUsuarios ? this.dadosUsuarios.nome : '')
    });

    this.serviceUsuario.findALlUsuario().subscribe(usuarios =>{
      this.usuarios = usuarios;
      console.log(usuarios);
    })

    this.livrosForm = new FormGroup({
      id: new FormControl(this.dadosLivros ? this.dadosLivros.id : 0),
      titulo: new FormControl(this.dadosLivros ? this.dadosLivros.titulo : ''),
      autor: new FormControl(this.dadosLivros ? this.dadosLivros.autor : '')
    });

    this.serviceLivro.getLivros().subscribe(livros =>{
      this.livros = livros;
      console.log(livros);
    })
  }



  submit() :void{
    this.onSubmit.emit(this.emprestimoForm.value);
 console.log(this.emprestimoForm);
 console.log(this.livrosForm);
 console.log(this.usuarioForm);

  }


}
