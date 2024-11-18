import { Livros } from "./Livros";
import { Usuarios } from "./Usuarios";

export interface Servicos {
  id?: number;
  livros: Livros;
  usuarios: Usuarios;
  dataEmprestimo: string;
  dataDevolucao: number;
  devolvido: boolean;

}

