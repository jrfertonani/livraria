package Back.usuarios.model.DTO;

import Back.usuarios.model.entity.Usuarios;
import lombok.Data;

import java.io.Serializable;

@Data
public class usuariosDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String nome;




}
