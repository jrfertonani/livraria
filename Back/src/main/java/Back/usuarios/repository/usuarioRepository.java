package Back.usuarios.repository;

import Back.usuarios.model.entity.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface usuarioRepository extends JpaRepository<Usuarios, Long> {
}
