package Back.livros.resources;

import Back.livros.model.DTO.livroDTO;
import Back.livros.model.entity.Livros;
import Back.livros.service.livroService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/livros")
public class livroResource {

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private livroService service;

    @PostMapping
    public ResponseEntity<livroDTO> create(@RequestBody livroDTO DTO){
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(
                        service.create(DTO)).toUri();
        return ResponseEntity.created(uri).body(DTO);
    }

    @GetMapping
    public ResponseEntity<List<livroDTO>> findAll(){
        return ResponseEntity.ok().body(
                service.list()
                        .stream().map(
                                x -> mapper.map(x,livroDTO.class)
                        ).toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<livroDTO> findById(@PathVariable Long id){
        return ResponseEntity.ok().body(
                (service.findById(id))
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<livroDTO> update(@PathVariable Long id,
                                           @RequestBody livroDTO DTO){
        DTO.setId(id);
        Livros obj = service.update(id, DTO);
        return ResponseEntity.ok().body(DTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<livroDTO> delete(@PathVariable Long id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }


}
