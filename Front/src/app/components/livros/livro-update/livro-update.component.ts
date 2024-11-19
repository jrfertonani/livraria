import { Component, OnInit } from '@angular/core';
import { LivroFormComponent } from "../livro-form/livro-form.component";
import { LivrosService } from '../../../services/livros/livros.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Livros } from '../../../model/Livros';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro-update',
  standalone: true,
  imports: [LivroFormComponent, CommonModule],
  templateUrl: './livro-update.component.html',
  styleUrl: './livro-update.component.css'
})
export class LivroUpdateComponent implements OnInit{

  btnAcao = "Editar"
  descTitulo = "Editar Livro"

  livro!: Livros;

  constructor(private esrviceLivro: LivrosService, private router: Router, private route: ActivatedRoute){}



  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.esrviceLivro.getLivrosById(id).subscribe(livros =>{
      this.livro = livros;
    })


  }

}
