package Back.emprestimo.service;

import Back.emprestimo.model.DTO.emprestimoDTO;
import Back.emprestimo.model.entity.Emprestimo;
import Back.emprestimo.repository.emprestimoRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class emprestimoService {

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private emprestimoRepository repository;


    public Emprestimo create(emprestimoDTO DTO) {
        return repository.save(
                mapper.map(DTO, Emprestimo.class)
        );
    }


}
