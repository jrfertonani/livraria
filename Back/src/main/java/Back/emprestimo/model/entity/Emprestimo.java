package Back.emprestimo.model.entity;

import Back.livros.model.entity.Livros;
import Back.usuarios.model.entity.Usuarios;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDate;

@Data   @Entity
public class Emprestimo implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_livro")
    private Livros livros;

    @ManyToOne
    @JoinColumn(name = "id_usuarios")
    private Usuarios usuarios;


    @Column(nullable = false)
    private LocalDate dataEmprestimo;

    @Column(nullable = false)
    private LocalDate dataDevolucao;

    @Column(nullable = false)
    private boolean devolvido;



}
