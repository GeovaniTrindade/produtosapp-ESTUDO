import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacoesCadastroComponent } from './movimentacoes-cadastro.component';

describe('MovimentacoesCadastroComponent', () => {
  let component: MovimentacoesCadastroComponent;
  let fixture: ComponentFixture<MovimentacoesCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovimentacoesCadastroComponent]
    });
    fixture = TestBed.createComponent(MovimentacoesCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
