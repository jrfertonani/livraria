package Back.livros.model.entity;

import Back.usuarios.model.entity.Usuarios;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Data   @Entity
public class Livros implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;

}
