import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDetalheComponent } from './emp-detalhe.component';

describe('EmpDetalheComponent', () => {
  let component: EmpDetalheComponent;
  let fixture: ComponentFixture<EmpDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpDetalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
