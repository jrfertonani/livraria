package Back.emprestimo.model.DTO;

import java.time.LocalDate;
import lombok.Data;

@Data
public class emprestimoDTO {

    private Long id;
    private String tituloLivro; // Em vez de idLivro, exibimos o título do livro
    private String nomeUsuario; // Em vez de idUsuario, exibimos o nome do usuário
    private LocalDate dataEmprestimo;
    private LocalDate dataDevolucao;
    private boolean devolvido;


}
