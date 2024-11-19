import { Component } from '@angular/core';
import { LivroFormComponent } from "../livro-form/livro-form.component";
import { LivrosService } from '../../../services/livros/livros.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-livro-update',
  standalone: true,
  imports: [LivroFormComponent],
  templateUrl: './livro-update.component.html',
  styleUrl: './livro-update.component.css'
})
export class LivroUpdateComponent {


  constructor(private esrviceLivro: LivrosService, private router: Router, private route: ActivatedRoute){}

}
