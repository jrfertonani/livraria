package Back.emprestimo.repository;

import Back.emprestimo.model.entity.Emprestimo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface emprestimoRepository extends JpaRepository<Emprestimo, Long> {
}
