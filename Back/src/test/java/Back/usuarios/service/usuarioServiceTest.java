package Back.usuarios.service;

import Back.usuarios.model.DTO.usuariosDTO;
import Back.usuarios.model.entity.Usuarios;
import Back.usuarios.repository.usuarioRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.modelmapper.ModelMapper;

import static org.junit.jupiter.api.Assertions.*;

class usuarioServiceTest {

    @Mock
    private usuarioRepository repository;
    @Mock
    private ModelMapper mapper;

    private Usuarios usuarios;
    private usuariosDTO usuariosDTO;



    @BeforeEach
    void setUp() {
    }

    @Test
    void create() {
    }

    @Test
    void list() {
    }

    @Test
    void findById() {
    }

    @Test
    void update() {
    }

    @Test
    void delete() {
    }
}