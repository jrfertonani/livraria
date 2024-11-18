import { Component, OnInit } from '@angular/core';
import { LivrosService } from '../../../services/livros/livros.service';
import { Livros } from '../../../model/Livros';

@Component({
  selector: 'app-livro-list',
  standalone: true,
  imports: [],
  templateUrl: './livro-list.component.html',
  styleUrl: './livro-list.component.css'
})
export class LivroListComponent implements OnInit{

  livro : Livros [] =[];
  livrosGeral : Livros [] = [];

  constructor(private serviceLivro: LivrosService){}


  ngOnInit(): void {
    this.serviceLivro.getLivros().subscribe(response =>{
      this.livro = response.dados;
    })
  }




}
