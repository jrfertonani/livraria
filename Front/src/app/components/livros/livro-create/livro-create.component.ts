import { Component,  } from '@angular/core';
import { LivroFormComponent } from "../livro-form/livro-form.component";
import { Livros } from '../../../model/Livros';
import { LivrosService } from '../../../services/livros/livros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-create',
  standalone: true,
  imports: [LivroFormComponent],
  templateUrl: './livro-create.component.html',
  styleUrl: './livro-create.component.css'
})
export class LivroCreateComponent {

  btnAcao = "Cadastrar";
  descTitulo = "Cadastrar livro"

  constructor(private serviceLivros: LivrosService, private router: Router){}

  criarLivros(livro: Livros){
    this.serviceLivros.createLivros(livro).subscribe(livro => {
      this.router.navigate(['livros'])
    })
  }

}
