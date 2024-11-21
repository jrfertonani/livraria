import { Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { LivroListComponent } from './components/livros/livro-list/livro-list.component';
import { UsuarioListComponent } from './components/usuarios/usuario-list/usuario-list.component';
import { EmpListComponent } from './components/emprestimos/emp-list/emp-list.component';
import { LivroCreateComponent } from './components/livros/livro-create/livro-create.component';
import { LivroUpdateComponent } from './components/livros/livro-update/livro-update.component';
import { UsuarioCreateComponent } from './components/usuarios/usuario-create/usuario-create.component';
import { UsuarioUpdateComponent } from './components/usuarios/usuario-update/usuario-update.component';
import { EmpCreateComponent } from './components/emprestimos/emp-create/emp-create.component';
import { EmpDetalheComponent } from './components/emprestimos/emp-detalhe/emp-detalhe.component';

export const routes: Routes = [

  {path:'', component: HomeComponent},
  {path:'livros', component: LivroListComponent},
  {path:'cadastro',component: LivroCreateComponent},
  {path:'editar/:id',component: LivroUpdateComponent},


  {path:'usuarios', component: UsuarioListComponent},
  {path:"usuarios/cadastrar", component: UsuarioCreateComponent},
  {path:"usuario/update/:id", component: UsuarioUpdateComponent},

  {path:"emprestimo", component: EmpListComponent},
  {path:'emprestimo/cadastrar', component: EmpCreateComponent},
  {path:'emprestimo/editar/:id', component: EmpListComponent},
  {path:'emprestimo/detalhe/:id', component: EmpDetalheComponent},

];
