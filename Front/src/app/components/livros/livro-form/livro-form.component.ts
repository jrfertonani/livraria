import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Livros } from '../../../model/Livros';

@Component({
  selector: 'app-livro-form',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './livro-form.component.html',
  styleUrl: './livro-form.component.css'
})
export class LivroFormComponent implements OnInit{

  @Output() onSubmit = new EventEmitter<Livros>();

  @Input() dadosLivros : Livros | null = null;


  livrosForm!: FormGroup;

  ngOnInit(): void {
    this.livrosForm = new FormGroup({
      id: new FormControl(this.dadosLivros ? this.dadosLivros.id : 0),
      titulo: new FormControl(this.dadosLivros ? this.dadosLivros.titulo :''),
      autor: new FormControl(this.dadosLivros ? this.dadosLivros.autor :'')
    })
  }


  submit(){
    this.onSubmit.emit(this.livrosForm.value);
  }



}
