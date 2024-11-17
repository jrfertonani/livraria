package Back.usuarios.service;

import Back._config.Exeptions.serviceExceptions.ObjectNotFoundException;
import Back.usuarios.model.DTO.usuariosDTO;
import Back.usuarios.model.entity.Usuarios;
import Back.usuarios.repository.usuarioRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class usuarioService {

    @Autowired
    private ModelMapper mapper;


    @Autowired
    private usuarioRepository repository;

    public Usuarios create(usuariosDTO DTO) {
        return repository.save(
                mapper.map(DTO, Usuarios.class));
    }

    public List<Usuarios> list() {
        return repository.findAll();
    }

    public usuariosDTO findById(Long id){
        return mapper.map(
                repository.findById(id)
                        .orElseThrow(
                       () -> new ObjectNotFoundException("Objeto não encontrado.  ID: " +id)
                        ),usuariosDTO.class);
    }

    public Usuarios update(Long id, usuariosDTO DTO){
        findById(id);
        return  repository.save(
                mapper.map(DTO, Usuarios.class)
        );
    }


    public void delete(Long id) {
        findById(id);
        repository.deleteById(id);
    }



}
