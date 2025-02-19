import { Component } from '@angular/core';
import { EmprestimoFormComponent } from "../emprestimo-form/emprestimo-form.component";
import { Emprestimos } from '../../../model/Emprestimos';
import { EmprestimoService } from '../../../services/emprestimos/emprestimo.service';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuarios/usuario.service';
import { LivrosService } from '../../../services/livros/livros.service';

@Component({
  selector: 'app-emprestimo-create',
  standalone: true,
  imports: [EmprestimoFormComponent],
  templateUrl: './emprestimo-create.component.html',
  styleUrl: './emprestimo-create.component.css'
})
export class EmprestimoCreateComponent {

  btnAcao= "Cadastrar";
  descTitulo="Cadastrar um Emprestimo";

  constructor(private serviceEmprestimo : EmprestimoService, private router: Router,
    private serviceUsuario: UsuarioService,
    private serviceLivro: LivrosService
  ){}

  criarEmprestimo(emprestimo: Emprestimos){
    this.serviceEmprestimo.criarEmprestimo(emprestimo).subscribe(emprestimo => {
     this.router.navigate(['/emprestimos']);
    })
  }

}
