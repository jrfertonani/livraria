import { Component, OnInit } from '@angular/core';
import { Emprestimos } from '../../../model/Emprestimos';
import { EmprestimoService } from '../../../services/emprestimos/emprestimo.service';

@Component({
  selector: 'app-emprestimo-list',
  standalone: true,
  imports: [],
  templateUrl: './emprestimo-list.component.html',
  styleUrl: './emprestimo-list.component.css'
})
export class EmprestimoListComponent implements OnInit{

  emprestimo : Emprestimos [] =[];
  emprestimosGeral : Emprestimos [] = [];

  constructor(private serviceEmprestimo: EmprestimoService){}


  ngOnInit(): void {


    }




}
