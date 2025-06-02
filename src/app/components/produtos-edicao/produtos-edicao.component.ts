import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environments } from 'src/environments/environments';

@Component({
  selector: 'app-produtos-edicao',
  templateUrl: './produtos-edicao.component.html',
  styleUrls: ['./produtos-edicao.component.css']
})
export class ProdutosEdicaoComponent implements OnInit {

  mensagem: string = '';

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {

  }
  ngOnInit(): void {
    // capturando o id enviado na url
    var idProduto = this.activatedRoute.snapshot.paramMap.get('id') as string;
    // consultando o produto através do ID
    this.httpClient.get(environments.apiProdutos + '/produtos/' + idProduto)
      .subscribe({
        next: (data: any) => {
          // preencher o formulário com os dados do produto obtido
          this.formEdicao.patchValue(data);
        },
        error: (e) => {
          console.log(e);
        }
      })
  }

  // criando a estrutura do formulário
  formEdicao = new FormGroup({
    idProduto: new FormControl('', [Validators.required]),
    nome: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-zÀ-Üà-ü0-9\s]{8,150}$/)]),
    descricao: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-zÀ-Üà-ü0-9\s]{8,150}$/)]),
    preco: new FormControl('', [Validators.required, Validators.min(1)]),
    quantidade: new FormControl('', [Validators.required, Validators.min(1)])
  });

  get form(): any {
    return this.formEdicao.controls;
  }

  onSubmit(): any {
    this.httpClient.put(environments.apiProdutos + '/produtos', this.formEdicao.value)
      .subscribe({
        next: (data: any) => {
          this.mensagem = data.mensagem;
        },
        error: (e) => {
          this.mensagem = e.error.mensagem;
        }
      });
  }
}
