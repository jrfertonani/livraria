package Back.emprestimo.resources;

import Back.emprestimo.service.emprestimoService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/emprestimo")
public class emprestimoResource {

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private emprestimoService service;




}
