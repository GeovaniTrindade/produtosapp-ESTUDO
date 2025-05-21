import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacoesConsultaComponent } from './movimentacoes-consulta.component';

describe('MovimentacoesConsultaComponent', () => {
  let component: MovimentacoesConsultaComponent;
  let fixture: ComponentFixture<MovimentacoesConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovimentacoesConsultaComponent]
    });
    fixture = TestBed.createComponent(MovimentacoesConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
