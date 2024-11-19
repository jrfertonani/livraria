import { Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { LivroListComponent } from './components/livros/livro-list/livro-list.component';
import { UsuarioListComponent } from './components/usuarios/usuario-list/usuario-list.component';
import { EmpListComponent } from './components/emprestimos/emp-list/emp-list.component';
import { LivroCreateComponent } from './components/livros/livro-create/livro-create.component';
import { LivroUpdateComponent } from './components/livros/livro-update/livro-update.component';

export const routes: Routes = [

  {path:'', component: HomeComponent},
  {path:'livros', component: LivroListComponent},
  {path:'cadastro',component: LivroCreateComponent},
  {path:'editar/:id',component: LivroUpdateComponent},
  {path:'usuarios', component: UsuarioListComponent},
  {path:"emprestimos", component: EmpListComponent},

];
