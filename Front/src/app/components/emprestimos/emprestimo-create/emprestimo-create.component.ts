import { Component } from '@angular/core';
import { EmprestimoFormComponent } from "../emprestimo-form/emprestimo-form.component";
import { Emprestimos } from '../../../model/Emprestimos';
import { EmprestimoService } from '../../../services/emprestimos/emprestimo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emprestimo-create',
  standalone: true,
  imports: [EmprestimoFormComponent],
  templateUrl: './emprestimo-create.component.html',
  styleUrl: './emprestimo-create.component.css'
})
export class EmprestimoCreateComponent {

  constructor(private serviceEmprestimo : EmprestimoService, private router: Router){}

  criarEmprestimo(emprestimo: Emprestimos){
    this.serviceEmprestimo.criarEmprestimo(emprestimo).subscribe(emprestimo => {
     this.router.navigate(['/emprestimos']);
    })
  }

}
