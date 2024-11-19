import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-livro-form',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './livro-form.component.html',
  styleUrl: './livro-form.component.css'
})
export class LivroFormComponent implements OnInit{


  livrosForm!: FormGroup;

  ngOnInit(): void {
    this.livrosForm = new FormGroup({
      id: new FormControl(0),
      titulo: new FormControl(''),
      autor: new FormControl('')
    })
  }


  submit(event:Event){

  }
}
