import { Component, OnInit } from '@angular/core';
import { LivrosService } from '../../../services/livros/livros.service';
import { Livros } from '../../../model/Livros';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-livro-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './livro-list.component.html',
  styleUrl: './livro-list.component.css'
})
export class LivroListComponent implements OnInit{

  livros : Livros [] =[];
  livrosGeral : Livros [] = [];

  constructor(private serviceLivro: LivrosService){}


  ngOnInit(): void {
    this.serviceLivro.getLivros().subscribe( livros =>{
        this.livros = livros;
        this.livrosGeral = livros;
    })
    }

    search(event: Event){
      const target = event.target as HTMLInputElement;
      const value = target.value.toLowerCase();

      this.livros = this.livrosGeral.filter(livros => {
        return livros.titulo.toLowerCase().includes(value);
      })

    }

  deletar(id: number | undefined){
    this.serviceLivro.deletar(id).subscribe(livros => {
      window.location.reload();
    })
  }

}
