import { Component } from '@angular/core';
import { EmpFormComponent } from "../emp-form/emp-form.component";
import { Emprestimos } from '../../../model/Emprestimos';
import { EmprestimosService } from '../../../services/emprestimos/emprestimos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-create',
  standalone: true,
  imports: [EmpFormComponent],
  templateUrl: './emp-create.component.html',
  styleUrl: './emp-create.component.css'
})
export class EmpCreateComponent {



  constructor(private serviceEmprestimo: EmprestimosService, private router: Router){}

  createEmprestimo(emprestimos: Emprestimos){
    this.serviceEmprestimo.createEmprestimo(emprestimos).subscribe((emprestimos)=>{
      this.router.navigate(['/emprestimos'])
    })

  }


}
