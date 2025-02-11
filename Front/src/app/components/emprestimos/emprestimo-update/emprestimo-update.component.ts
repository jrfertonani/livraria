import { Component } from '@angular/core';
import { EmprestimoFormComponent } from "../emprestimo-form/emprestimo-form.component";

@Component({
  selector: 'app-emprestimos-update',
  standalone: true,
  imports: [EmprestimoFormComponent],
  templateUrl: './emprestimo-update.component.html',
  styleUrl: './emprestimo-update.component.css'
})
export class EmprestimoUpdateComponent {

}
