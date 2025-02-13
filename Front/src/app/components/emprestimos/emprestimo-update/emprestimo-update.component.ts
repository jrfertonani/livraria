import { Component } from '@angular/core';
import { EmprestimoFormComponent } from "../emprestimo-form/emprestimo-form.component";
import { EmprestimoService } from '../../../services/emprestimos/emprestimo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Emprestimos } from '../../../model/Emprestimos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emprestimos-update',
  standalone: true,
  imports: [EmprestimoFormComponent, CommonModule],
  templateUrl: './emprestimo-update.component.html',
  styleUrl: './emprestimo-update.component.css'
})
export class EmprestimoUpdateComponent {

  emprestimo!: Emprestimos;

  constructor(private serviceEmprestimo: EmprestimoService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(){

    console.log(1);

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.serviceEmprestimo.getEmprestimoId(id).subscribe(emprestimo =>{

      console.log(2);

      this.emprestimo = emprestimo;
    })
  }


}
