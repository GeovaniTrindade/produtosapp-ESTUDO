import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosEdicaoComponent } from './produtos-edicao.component';

describe('ProdutosEdicaoComponent', () => {
  let component: ProdutosEdicaoComponent;
  let fixture: ComponentFixture<ProdutosEdicaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosEdicaoComponent]
    });
    fixture = TestBed.createComponent(ProdutosEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
