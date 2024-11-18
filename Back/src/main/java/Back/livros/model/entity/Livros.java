package Back.livros.model.entity;

import Back.emprestimo.model.entity.Emprestimo;
import Back.usuarios.model.entity.Usuarios;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data   @Entity
public class Livros implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String titulo;

    @Column(nullable = false)
    private String autor;


    // Outros atributos como editora, ano de publicação, etc.

    @OneToMany(mappedBy = "livros")
    private List<Emprestimo> emprestimos;

}
