package Back.emprestimo.service;

import Back._config.Exeptions.serviceExceptions.ObjectNotFoundException;
import Back.emprestimo.model.DTO.emprestimoDTO;
import Back.emprestimo.model.entity.Emprestimo;
import Back.emprestimo.repository.emprestimoRepository;
import Back.livros.model.DTO.livroDTO;
import Back.livros.model.entity.Livros;
import Back.livros.repository.livroRepository;
import Back.usuarios.model.entity.Usuarios;
import Back.usuarios.service.usuarioService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class emprestimoService {

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private emprestimoRepository repository;

    @Autowired
    private livroRepository LivroRepository;

    @Autowired
    private usuarioService UsuariosService;


    public Emprestimo create(emprestimoDTO DTO) {
        return repository.save(mapper.map(DTO, Emprestimo.class));
    }


    public List<Emprestimo> list() {
        return repository.findAll();
    }

    public emprestimoDTO findById(Long id) {
        return mapper.map(
        repository.findById(id)
                .orElseThrow(
        ()-> new ObjectNotFoundException("Objeto não encontrado! ID: " + id)
        ), emprestimoDTO.class);
    }

    public Emprestimo update(Long id, emprestimoDTO DTO) {
        findById(id);
        return repository.save(
                mapper.map(DTO, Emprestimo.class)
        );
    }

    public void delete(Long id) {
        findById(id);
        repository.deleteById(id);
    }
}
