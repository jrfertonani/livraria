import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroCreateComponent } from './livro-create.component';

describe('LivroCreateComponent', () => {
  let component: LivroCreateComponent;
  let fixture: ComponentFixture<LivroCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivroCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivroCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
