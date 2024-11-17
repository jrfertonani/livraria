package Back.livros.service;

import Back._config.Exeptions.serviceExceptions.ObjectNotFoundException;
import Back.livros.model.DTO.livroDTO;
import Back.livros.model.entity.Livros;
import Back.livros.repository.livroRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.util.List;

@Service
public class livroService {

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private livroRepository repository;


    public Livros create(livroDTO DTO) {
        return repository.save(
                mapper.map(DTO, Livros.class));

    }

    public List<Livros> list() {
        return repository.findAll();
    }

    public livroDTO findById(Long id) {
        return mapper.map(
                repository.findById(id)
                        .orElseThrow(
                ()-> new ObjectNotFoundException("Objeto não encontrado! ID: " +id)
                        ),livroDTO.class);
    }

    public Livros update(Long id, livroDTO DTO) {
        findById(id);
        return repository.save(
                mapper.map(DTO, Livros.class)
        );
    }

    public void delete (Long id){
        findById(id);
        repository.deleteById(id);
    }
}
