package Back.emprestimo.resources;

import Back.emprestimo.model.DTO.emprestimoDTO;
import Back.emprestimo.model.entity.Emprestimo;
import Back.emprestimo.service.emprestimoService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@CrossOrigin("*")
@RestController
@RequestMapping("/emprestimo")
public class emprestimoResource {

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private emprestimoService service;


    @PostMapping
    public ResponseEntity<emprestimoDTO> create(@RequestBody emprestimoDTO DTO){
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(
                        service.create(DTO)
                ).toUri();
        return ResponseEntity.created(uri).body(DTO);
    }



}
