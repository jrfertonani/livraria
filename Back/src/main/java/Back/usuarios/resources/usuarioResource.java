package Back.usuarios.resources;

import Back.usuarios.model.DTO.usuariosDTO;
import Back.usuarios.model.entity.Usuarios;
import Back.usuarios.service.usuarioService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/usuarios")
public class usuarioResource {

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private usuarioService service;


    @PostMapping
    public ResponseEntity<usuariosDTO> create(@RequestBody usuariosDTO DTO){
        URI uri = ServletUriComponentsBuilder.
                fromCurrentRequest().path("/{id}")
                .buildAndExpand(service.create(DTO).getId())
                .toUri();
        return ResponseEntity.created(uri).body(DTO);
    }

    @GetMapping
    public ResponseEntity<List<usuariosDTO>> list(){
        return ResponseEntity.ok().body(
                service.list()
                        .stream().map(
                        x -> mapper.map(x, usuariosDTO.class))
                        .toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<usuariosDTO> findById(@PathVariable Long id){
        return ResponseEntity.ok().body(
                (service.findById(id))
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<usuariosDTO> update(@PathVariable Long id,
                                              @RequestBody usuariosDTO DTO){
        DTO.setId(id);
        Usuarios obj = service.update(id, DTO);
        return ResponseEntity.ok().body(DTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<usuariosDTO> delete(@PathVariable Long id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }



}
