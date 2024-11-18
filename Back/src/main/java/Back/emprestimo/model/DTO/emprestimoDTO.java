package Back.emprestimo.model.DTO;

import java.time.LocalDate;

import Back.livros.model.entity.Livros;
import Back.usuarios.model.entity.Usuarios;
import lombok.Data;

@Data
public class emprestimoDTO {

    private Long id;
    private Livros tituloLivro; // Em vez de idLivro, exibimos o título do livro
    private Usuarios nomeUsuario; // Em vez de idUsuario, exibimos o nome do usuário
    private LocalDate dataEmprestimo;
    private LocalDate dataDevolucao;
    private boolean devolvido;



}
