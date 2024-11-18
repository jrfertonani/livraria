package Back.usuarios.model.entity;

import Back.emprestimo.model.entity.Emprestimo;
import Back.livros.model.entity.Livros;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data   @Entity
public class Usuarios implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    // Outros atributos como endereço, telefone, etc.

    @OneToMany(mappedBy = "usuarios")
    private List<Emprestimo> emprestimos;

}
