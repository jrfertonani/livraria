package Back.usuarios.service;

import Back.usuarios.repository.usuarioRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class usuarioService {

    @Autowired
    private ModelMapper mapper;


    @Autowired
    private usuarioRepository repository;
}
