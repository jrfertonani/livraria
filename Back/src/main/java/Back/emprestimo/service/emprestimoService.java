package Back.emprestimo.service;

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


}
