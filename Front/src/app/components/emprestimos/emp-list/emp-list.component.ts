import { Component, OnInit } from '@angular/core';
import { EmprestimosService } from '../../../services/emprestimos/emprestimos.service';
import { Emprestimos } from '../../../model/Emprestimos';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-emp-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './emp-list.component.html',
  styleUrl: './emp-list.component.css'
})
export class EmpListComponent implements OnInit{

  title: string = 'Emprestimos'

  emprestimos: Emprestimos[] = [];
  emprestimosGeral: Emprestimos[] =[];





  constructor(private serviceEmprestimo: EmprestimosService){}



  ngOnInit(): void {
    this.serviceEmprestimo.getEmprestimo().subscribe(dado =>{
      this.emprestimos = dado;
      this.emprestimosGeral = dado;

    })


  }



  deletar(id: number | undefined){
    this.serviceEmprestimo.deleteEmprestimo(id).subscribe(emprestimos=>{
      window.location.reload();
    })
  }


  search(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.emprestimos = this.emprestimosGeral.filter(emprestimo =>{
      return emprestimo.nomeUsuario.nome.toLowerCase().includes(value);
    })

  }


}
