package Back.livros.repository;

import Back.livros.model.entity.Livros;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface livroRepository extends JpaRepository<Livros, Long> {
}
