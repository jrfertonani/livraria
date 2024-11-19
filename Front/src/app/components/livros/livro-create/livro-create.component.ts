import { Component } from '@angular/core';
import { LivroFormComponent } from "../livro-form/livro-form.component";

@Component({
  selector: 'app-livro-create',
  standalone: true,
  imports: [LivroFormComponent],
  templateUrl: './livro-create.component.html',
  styleUrl: './livro-create.component.css'
})
export class LivroCreateComponent {

}
