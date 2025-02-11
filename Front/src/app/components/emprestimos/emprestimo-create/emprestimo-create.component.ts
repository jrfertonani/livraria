import { Component } from '@angular/core';
import { EmprestimoFormComponent } from "../emprestimo-form/emprestimo-form.component";

@Component({
  selector: 'app-emprestimo-create',
  standalone: true,
  imports: [EmprestimoFormComponent],
  templateUrl: './emprestimo-create.component.html',
  styleUrl: './emprestimo-create.component.css'
})
export class EmprestimoCreateComponent {

}
