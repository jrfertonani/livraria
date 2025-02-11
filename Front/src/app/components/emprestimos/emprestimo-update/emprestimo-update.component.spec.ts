import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprestimoUpdateComponent } from './emprestimo-update.component';

describe('EmprestimoUpdateComponent', () => {
  let component: EmprestimoUpdateComponent;
  let fixture: ComponentFixture<EmprestimoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmprestimoUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmprestimoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
