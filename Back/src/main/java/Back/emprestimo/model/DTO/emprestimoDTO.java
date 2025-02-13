package Back.emprestimo.model.DTO;

import java.time.LocalDate;

import Back.livros.model.entity.Livros;
import Back.usuarios.model.entity.Usuarios;
import lombok.Data;

@Data
public class emprestimoDTO {

    private Long id;
    private Livros Livro;
    private Usuarios Usuario;
    private LocalDate dataEmprestimo;
    private LocalDate dataDevolucao;
    private boolean devolvido;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
