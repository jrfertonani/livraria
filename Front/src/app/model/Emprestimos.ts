import { Livros } from "./Livros";
import { Usuarios } from "./Usuarios";

export interface Emprestimos {
  id?: number;
  tituloLivro: Livros;
  nomeUsuario: Usuarios;
  dataEmprestimo: string;
  dataDevolucao: number;
  devolvido: boolean;

}

