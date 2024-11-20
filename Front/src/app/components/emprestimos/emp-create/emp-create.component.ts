import { Component } from '@angular/core';
import { EmpFormComponent } from "../emp-form/emp-form.component";
import { Emprestimos } from '../../../model/Emprestimos';

@Component({
  selector: 'app-emp-create',
  standalone: true,
  imports: [EmpFormComponent],
  templateUrl: './emp-create.component.html',
  styleUrl: './emp-create.component.css'
})
export class EmpCreateComponent {


  createEmprestimo(Emprestimos: Emprestimos){


  }


}
