import { Livros } from "./Livros";
import { Usuarios } from "./Usuarios";

export interface Emprestimos {
  id?: number;
  livro: Livros;
  usuario: Usuarios;
  dataEmprestimo: Date;
  dataDevolucao: Date;
  devolvido: boolean;
}
