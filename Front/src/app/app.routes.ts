import { Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { LivroListComponent } from './components/livros/livro-list/livro-list.component';
import { UsuarioListComponent } from './components/usuarios/usuario-list/usuario-list.component';
import { LivroCreateComponent } from './components/livros/livro-create/livro-create.component';
import { LivroUpdateComponent } from './components/livros/livro-update/livro-update.component';
import { UsuarioCreateComponent } from './components/usuarios/usuario-create/usuario-create.component';
import { UsuarioUpdateComponent } from './components/usuarios/usuario-update/usuario-update.component';
import { EmprestimoListComponent } from './components/emprestimos/emprestimo-list/emprestimo-list.component';
import { EmprestimoCreateComponent } from './components/emprestimos/emprestimo-create/emprestimo-create.component';
import { EmprestimoUpdateComponent } from './components/emprestimos/emprestimo-update/emprestimo-update.component';


export const routes: Routes = [

  {path:'', component: HomeComponent},

  {path:'livros', component: LivroListComponent},
  {path:'cadastro',component: LivroCreateComponent},
  {path:'editar/:id',component: LivroUpdateComponent},


  {path:'usuarios', component: UsuarioListComponent},
  {path:"usuarios/cadastrar", component: UsuarioCreateComponent},
  {path:"usuario/update/:id", component: UsuarioUpdateComponent},

  {path:'emprestimos', component: EmprestimoListComponent},
  {path:"emprestimos/cadastrar", component: EmprestimoCreateComponent},
  {path:"emprestimos/update/:id", component: EmprestimoUpdateComponent},


];
